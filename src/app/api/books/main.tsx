import { Octokit } from "octokit";
import { cookies } from 'next/headers';

export async function GetTopics(){

  const cookieStore = await cookies();
  const authToken = cookieStore.get('access_token').value;

  const octokit = new Octokit({auth : authToken})

  const query = await octokit.graphql(`
  query {
      repository(owner:"${process.env.NEXT_PUBLIC_REPO_OWNER}", name:"Solucionarios" ) {
        object(expression: "${process.env.NEXT_PUBLIC_REPO_BRANCH}:books") {
          ... on Tree {
                entries{
                  name
                  oid
                  }
          }
        }
      }
    }
  `)

  const result = query.repository.object.entries

  return Object.fromEntries(result.map(element => [element.name, element.oid]))

}

async function GetBookInfo(filter, name, octokit) {

  const data : any = await octokit.graphql(`
  query{
      repository(owner: "${process.env.NEXT_PUBLIC_REPO_OWNER}", name: "Solucionarios") {
        object(expression: "${process.env.NEXT_PUBLIC_REPO_BRANCH}:books/${filter}/${name}/config.json") {
          ... on Blob {
            text
        }
      }
    }
  }
  `)

  if (!data.repository.object) {
    return null
  }
  
  return JSON.parse(data.repository.object.text)

}
  
export async function GetBooks(oid, name, init, end){


  const cookieStore = await cookies();
  const authToken = cookieStore.get('access_token').value;

  const octokit = new Octokit({auth : authToken})

  const query = await octokit.graphql(`
  query {
      repository(owner:"${process.env.NEXT_PUBLIC_REPO_OWNER}", name:"Solucionarios" ) {
        
        object(oid : "${oid}") {
          ... on Tree {
            entries{
              name
            }
          }
        }
      }
    }
  `)
  
  const Info = {}

  if (!query.errors && query.repository.object) {

    const entries = query.repository.object.entries.slice(init, end)

    const books = await Promise.all(
      entries.map(async (element) => {
          const bookInfo = await GetBookInfo(name, element.name, octokit)

          if (bookInfo !== null) {
            return [element.name, bookInfo]
          }
          
          return null
        }
      )
    )

    for (const item of books) {
      if (item) {
        Info[item[0]] = item[1]
      }
    }

  }

  return { info : Info, hasMore : query.repository.object.entries.length > end }

}

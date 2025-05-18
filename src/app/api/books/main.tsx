import { Octokit } from "octokit";
import { cookies } from 'next/headers';

export async function GetTopics(){

  const cookieStore = await cookies();
  const authToken = cookieStore.get('access_token').value;

  const octokit = new Octokit({auth : authToken})

  const query = await octokit.graphql(`
  query {
      repository(owner:"DaveAlSv", name:"Solucionarios" ) {
        
        object(oid : "a543374f79eadba5a8335af46247bafb06f7cec3") {
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

async function GetBookInfo(path, octokit){

  const data = await octokit.graphql(`
  query{
      repository(owner: "DaveAlSv", name: "Solucionarios") {
        object(expression: "${path}") {
          ... on Blob {
            text
        }
      }
    }
  }
  `)

  
  
  return JSON.parse(data.repository.object.text)
  
}
  
export async function GetBooks(oid, name){


  const cookieStore = await cookies();
  const authToken = cookieStore.get('access_token').value;

  const octokit = new Octokit({auth : authToken})


  const query = await octokit.graphql(`
  query {
      repository(owner:"DaveAlSv", name:"Solucionarios" ) {
        
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
  
  var Info = {}

  for (const element of query.repository.object.entries){
    Info[element.name] = await GetBookInfo(`Development:books/${name}/${element.name}/config.json`, octokit)
  }
  
  return Info

}

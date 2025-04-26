import { Octokit } from "octokit";
import { cookies } from 'next/headers';

export function Topics({topics}){

  return topics.map((value, index) => <div key={index}>{value.name}</div>)
}

export async function GetTopics(){

  const cookieStore = await cookies();
  const authToken = cookieStore.get('access_token').value;

  const octokit = new Octokit({auth : authToken})

  const query = await octokit.graphql(`
  query {
      repository(owner:"DaveAlSv", name:"Solucionarios" ) {
        
        object(oid : "8f02494c2fefa1aa850eaac632a6583b88b9b7d7") {
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
  
  return query.repository.object.entries

}

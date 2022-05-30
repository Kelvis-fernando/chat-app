export default async function useHttpRequest(url: string, method: string) {
   const requestToApi = await fetch(url, { method });
   const responseOfrequestToJson = await requestToApi.json();
   return responseOfrequestToJson;
}

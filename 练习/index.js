import request from 'request'
import Promise from 'bluebird';
Promise.promisifyAll(request);

async function main(){
  const uri = 'https://api-staging003.mokahr.com/api-platform/v1/jobs-fields?currentHireMode=1';
  const apiKey = 'p1CmMMAR52Qr6Rn5eaLrVoZD4oMOavLp';
  const token = Buffer.from(apiKey).toString('base64');
  let options = {
    uri,
    headers: {
      Authorization: `Basic ${token}`
    }
  };
  const httpBody = await request.getAsync(options);
  console.log(token)
}
main();
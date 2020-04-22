# serverless_test
Prueba de serverless

BaseUrl: https://serverless.yostinv.now.sh/

### Registro
- Url: {BaseUrl}/api/auth/register
- Metodo: Post
- Header: { Accept: application/json }
- Parametros:
  {
    email: "",
    password: ""
  }

### Login
- Url: {BaseUrl}/api/auth/register
- Metodo: Post
- Header: { Accept: application/json }
- Parametros:
  {
    email: "",
    password: ""
  }
 - Repuesta:
  {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWEwNDc4M2MwNGI1YTAwMDg0NjkxMjIiLCJpYXQiOjE1ODc1NjIzOTIsImV4cCI6MTYxOTA5ODM5Mn0.HyNdRisDE9v2JZ6TJZQTMBoE37JSF0KB0uK2L54aXRU"
  }
  

### Info user
- Url: {BaseUrl}/api/auth/me
- Metodo: Get
- Header: {
Accept: application/json,
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWEwNDc4M2MwNGI1YTAwMDg0NjkxMjIiLCJpYXQiOjE1ODc1NjIzOTIsImV4cCI6MTYxOTA5ODM5Mn0.HyNdRisDE9v2JZ6TJZQTMBoE37JSF0KB0uK2L54aXRU
}

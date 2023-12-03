const postData = async (data) => {
  const url = 'https://jsonplaceholder.typicode.com/posts'
  const response = await fetch(url, {
    method: "POST",
    headers: { 'Content-Type': 'multipart/form-data' },
    body: data
  })
  return await response.json()
};

export {
  postData
}
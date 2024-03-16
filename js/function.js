
// https://jsonplaceholder.typicode.com/users

const h33 = document.getElementById('h33');
const SubmitBtn = document.getElementById('SubmitBtn').addEventListener('click', () => {
  
  const commentArea = document.getElementById('commentArea');
  const commentDiv = document.getElementById('commentDiv');

  const pTag = document.createElement('p');
  pTag.innerText = commentArea.value ;

  
   
  commentDiv.appendChild(pTag);
  commentArea.value = ' '; 

  

})
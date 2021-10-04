const btn = document.getElementById('btn')

const send = () =>{
  let val = document.getElementById('value').value
  localStorage.setItem('textvalue',val);
  return false

}



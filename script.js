function login(){
  if(document.getElementById('password').value==='JLPA'){
    document.getElementById('login').style.display='none';
    document.getElementById('content').style.display='block';
  } else alert('Senha incorreta');
}
function search(){ document.getElementById('results').innerHTML='(integração futura com PocketBase)'; }

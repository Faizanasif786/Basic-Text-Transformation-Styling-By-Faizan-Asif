
document.getElementById('preview').addEventListener('click',function(){
  var text = document.getElementById('text').value
  document.getElementById('previewtext').innerHTML = text
})
document.getElementById('bold').addEventListener('click', function(){
  document.getElementById('previewtext').style.fontWeight = '700'
  document.getElementById('bold').innerHTML = 'Normal'
  document.getElementById('bold').addEventListener('click',function(){
    document.getElementById('previewtext').style.fontWeight = '500'
    document.getElementById('bold').innerHTML = 'bold'
  
  })
})

document.getElementById('italic').addEventListener('click',function(){
  document.getElementById('previewtext').style.fontStyle = 'italic'
  document.getElementById('italic').innerHTML = 'Normal'
  document.getElementById('italic').addEventListener('click',function(){
    document.getElementById('previewtext').style.fontStyle = 'normal'
  document.getElementById('italic').innerHTML = 'italic'

  })
})


document.getElementById('upcase').addEventListener('click',function(){
  document.getElementById('previewtext').style.textTransform = 'uppercase'
  document.getElementById('upcase').innerHTML = 'lowercase'
  document.getElementById('upcase').addEventListener('click',function(){
    document.getElementById('previewtext').style.textTransform = 'lowercase'
  document.getElementById('upcase').innerHTML = 'uppercase'
    
 

  })
})

function removetext(){
 
  document.getElementById('previewtext').innerHTML = ""
  document.getElementById('text').value = ""
}
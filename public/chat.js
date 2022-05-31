const socket= io.connect('http://localhost:3000');


var message = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var output = document.getElementById('output');
var feedback = document.getElementById('feedback');
var form = document.getElementById('myForm');


btn.addEventListener('click',(e)=>{
    socket.emit('chat',{
        message :message.value,
        handle:handle.value
        
    })
    e.preventDefault()
    form.reset()
})

message.addEventListener('keypress',()=>{
    socket.emit('typing',handle.value)
})


socket.on('chat',(data)=>{
    output.innerHTML+='<p><strong> '+ data.handle + ' : ' + '</strong>'+ data.message +'</p>' +'<hr>';
    feedback.innerHTML='';
   
   
    
})

socket.on('typing',(data)=>{
    feedback.innerHTML='<p><em>' + data + ' is typing a message...</em></p>';
})

$(document).ready(function(){
	var socket = io.connect('http://localhost:3000');

	socket.on('connect',function(){
		$('#status-text').append('Soy Cliente, me conecte al server. YAHOO!!!');
		$('#status-text').append('<br>');
	});

	socket.on('disconnect',function(){
		$('#status-text').append('Soy Cliente, el server se MURIOOO :(');
		$('#status-text').append('<br>');
	});

	socket.on('reconnect',function(){
		$('#status-text').append('Soy Cliente, me RECONECTE al server. SALVADOO!!!');
		$('#status-text').append('<br>');
	});

	socket.on('reconnect_attemp',function(){
		$('#status-text').append('Intentado reconectar');
		$('#status-text').append('<br>');
	});

	socket.on('reconnecting',function(times){
		$('#status-text').append('Reconectando. Intento #: '+times);
		$('#status-text').append('<br>');
	});


	
	$('#msg_text').on('keyup', function(e){
		if(e.keyCode==13){
			$('#button1').click();
		}
	});
	$('#button1').on('click', function(){
		var msg_texto = $('#msg_text').val();
		if(!msg_texto){
			msg_texto = 'null_msg';
		}
		var data_obj = {'id': $(this).attr('id'), 'msg': msg_texto};
		send_msg(data_obj);
	});



	function send_msg(data_obj){
		socket.emit('BTN_PRESS', data_obj);
	}

});

var join = join || {}
join = (()=>{
	let context,img,js
	let join_vue_js //회원가입 화면
	let auth_js, navi_vue_js
	let app_js

	//아이디 정규식
	var idJ = /^[a-z0-9]{2,12}$/;
	// 비밀번호 정규식
	var pwJ = /^[A-Za-z0-9]{2,12}$/;

	let init =()=>{
		context = $.ctx()
		img = $.img()
		js = $.js()
		join_vue_js = js + '/vue/user/join_vue.js'
		auth_js = js + '/user/auth.js'
		app_js = js + '/app.js'
		navi_vue_js  = js + '/vue/menu/navi_vue.js'
	}
	let onCreate =()=>{
		init()
		$.when(
			$.getScript(join_vue_js),
			$.getScript(auth_js),
			$.getScript(app_js),
			$.getScript(navi_vue_js)
		)
		.done(()=>{
			setContentView()
			signUp()
			gohome()
		})
		.fail(()=>{})
	}
	let setContentView =()=>{
		$('head').append(join_vue.join_head())
		// $('#mainNav').remove()
		$('.masthead').remove()
		$('.page-footer').remove()
		$('#mainpage').html(join_vue.join_ui({img : img}))
	}
	let signUp =()=>{
		$('<a/>',{
			text : 'Login Go',
			href : '#'
		})
		.addClass('loginhere-link')
		.appendTo('p[class="loginhere"]')
		.click(e=>{
			auth.onCreate()
		})
		existId()
		$('#userid').blur(function(){
			if(idJ.test($('#userid').val())){
				$('#userid').text('사용가능한 아이디입니다.').css('color','lightgreen')
			}else{
				$('#userid').text('영문 or 숫자를 사용해 2~12자리 입력하세요 ').css('color','red')
			}
		})
		$('#passwd').blur(function(){
			if(pwJ.test($('#passwd').val())){
				$('#pwd_check').text('사용가능한 비밀번호입니다').css('color','lightgreen')
			}else{
				$('#pwd_check').text('숫자 or 문자로만 2~12자리 입력').css('color','red')
			}
		})
		$('#re_password').blur(function(){
			if($('#passwd').val() === $('#re_password').val()){
				$('#pwd2_check').text('비밀번호가 일치합니다').css('color','lightgreen')
			}else{
				$('#pwd2_check').text('비밀번호가 틀립니다 다시 입력하세요').css('color','red')
			}
		})
		$('input[class="form-submit"]').click(e=>{
			e.preventDefault()
			$.ajax({
				url : context + '/users/join',
				type : 'POST',
				data : JSON.stringify({
					userid : $('#userid').val(),
					passwd : $('#passwd').val(),
					uname : $('#uname').val(),
					age : $('#age').val(),
					gender : $('input[name="gridRadios"]:checked').val(),
					height : $('#height').val(),
					weight : $('#weight').val(),
					fat : $('#fat').val(),
					muscle : $('#muscle').val()
				}),
				dataType : 'json',
				contentType  : 'application/json',
				success : ()=>{
					app.run(context)
				},
				error : ()=>{alert(`ajax실패`)}
				})
			})
	}
	let gohome =()=>{
		$('#home').click(e=>{
			e.preventDefault()
			app.run(context)
		})
	}
	let existId =()=>{
		$('#userid').keyup(()=>{
			if($('#userid').val().length >= 5){
				$.getJSON(context + '/users/exist/'+$('#userid').val(),d=>{
					if(d.msg === 'YES'){
						$('#id_check').text('이미 존재하는 아이디입니다').css({color : 'tomato'})
					}else{
						$('#id_check').text('멋진 아이디이시네여').css({color : 'lightgreen'})
					}
				})
			}
		})
	}
	return { onCreate }
})()
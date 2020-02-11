var brd = brd || {}
brd = (()=>{
	let context, js, css, img, brd_vuejs , profilejs
	let init = ()=>{
		context = $.ctx()
		js = $.js()
		css = $.css()
		img = $.img()
		brd_vuejs = js+'/vue/brd/brd_vue.js'
		profilejs = js+'/brd/profile.js'
	}
	let onCreate = () => {
		init()
		$.when(
			$.getScript(brd_vuejs),
			$.getScript(profilejs)
		)
		.done(()=>{
			setContentView()
			go_profile()
		})
		.fail(()=>{
		})
		$
	}
	let setContentView=() => {
		$('.masthead2').remove()
		$('.page-footer').remove()
		$('#mainpage').empty()
		$('<div id="contents" class="container-fluid" style="margin-top : 80px;"></div>').appendTo('#mainpage')
		$('#contents').append(brd_vue.brd_body({css : $.css()}))
		recent_updates({ pageSize: 9, currPage: 0})
		infinitePage({ pageSize: 9 })
		
		
	}
	let go_profile =()=>{
		$('#btn-profile')
		.click(()=>{
			profile.onCreate()
		})
	}
	let recent_updates =x=> {
		$.getJSON(context+'/post/infintelist/'+x.pageSize+'/'+x.currPage, d=>{
			$.each(d.post, (i,j)=>{
				$(`
				<div class="con" id="reply${j.postno}">
				    <div class="title">
				        <p>${j.userno}</p>
				    </div>
				    <img src="${context+'/resources/upload/'+j.img}" alt="" class="con_img">
				    <div class="logos">
				        <div class="logos_left">
				        	<div name="like">♡</div>
				            <img src="${img+'/heart.svg'}" alt="" class="logo_img">
				            <img src="${img+'/speech-bubble.svg'}" alt="" class="logo_img">
				        </div>
				    </div>
				    <div class="content">
				        <p>${j.content}</p>
				        <p><b>좋아요 80개</b></p>
				        <p><a href="">${sessionStorage.getItem('uname')}</a> #${j.tagname}</p>
				    </div>
				</div>
				<div class="modal fade bd-example-modal-lg" id="replymodal${j.postno}" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" style="max-height: 80%;" aria-hidden="true">
				    <div class="modal-dialog modal-lg">
				        <div class="modal-content" style="height: -webkit-fill-available; overflow: scroll;">
				            <div class="modal-body row" style="width: inherit;">
				                <div class="col-md-8">
				                    <img class="card-img" src="${context+'/resources/upload/'+j.img}" alt="Card image cap"><br>
				                    <p>${j.content}</p>
				                    <p><b>좋아요 80개</b></p>
				                </div>
				                <div class="col-md-4">
				                    <div class="replies">
				                    </div>
				                    <div class="modal-footer" style="padding: 0;">
				                        <textarea name="comment" placeholder="댓글을 입력하세요" style="width: 80%; border-color: white;"></textarea>
										<a name="insertreply" style="font-size: 14px; color: red;">등록 </a>
				                    </div>
				                </div>
				            </div>
				        </div>
				    </div>
				</div>
				`)
				.appendTo('#recent_updates')
				$(`
				<div class="col-md-4 col-sm-6 px-1 my-1  style=" max-width:31%; max-height:40%; justify-content: space-between;">
				    <img src="${context+'/resources/upload/'+j.img}" alt="Card image cap" style=" width: 100%;">
				</div>
				`)
				.appendTo('#menu2 div.row')

				$(`#reply${j.postno} img.con_img`).click(e=>{
					e.preventDefault()
					replyModal(j)
				})
			
				
				likes(j)
				writeReply(j)
			})//each문 끝
			
		})
	}
	
	let likes=j=>{
		
		
//		$(`#reply${j.postno} div[name="like"]`)
//		.text('♡')
//		.click(()=>{
//			$.getJSON(context+'/likes/read/'+j.postno+'/'+sessionStorage.getItem('userno'), d=>{
//				if(d==1){
//					alert('이미 좋아요 한 글입니다')
//				}
//				else{
//					alert('좋아요 클릭')
//				}
//			})
//		})
		
		
		
//		alert('글번호'+j.postno)
		$.getJSON(context+'/likes/read/'+j.postno+'/'+sessionStorage.getItem('userno'), d=>{
			if(d==0){
				$(`#reply${j.postno} div[name="like"]`)
				.text('♡')
				.click(()=>{
					
					$.ajax({
						url : context +'/likes/create/',
						type:'PUT',
						data: JSON.stringify({postno:j.postno,userno:sessionStorage.getItem('userno')}),
						dataType :'json',
						contentType : 'application/json',
						success : d =>{
							if(d.msg=="success")
								$(`#reply${j.postno} div[name="like"]` ).text('♥')
								
						},
						error: 	e =>{
							alert('ajax 실패')
						}
					})
				})
			}
			else{
				$(`#reply${j.postno} div[name="like"]` )
				.text('♥')
				.click(()=>{
					alert('좋아요 클릭 취소')
					$(`#reply${j.postno} div[name="like"]` ).text('♡')
					$.ajax({
						url : context +'/likes/delete/'+j.postno,
						type:'DELETE',
						data: JSON.stringify({postno:j.postno,userno:$.userno()}),
						dataType :'json',
						contentType : 'application/json',
						success : d =>{
							if(d.msg=="success")
								$(`#reply${j.postno} div[name="like"]` ).text('♡')
								
						},
						error: 	e =>{
							alert('ajax 실패')
						}
					})
					
					
					
				})
				
			}
			
		})
	}
	
	let replyModal =j=>{
		$(`#replymodal${j.postno} div[class="replies"]`).empty()
		$.getJSON(context+`/reply/list/${j.postno}`,f=>{
			$.each(f,(a,b)=>{
				if(b.userno == parseInt(sessionStorage.getItem('userno'))){
					$(`<textarea name="reply${b.commentno}" style="font-size: 12px; border-color: white;"> ${b.content} ${b.regdate}</textarea><a name="modify${b.commentno}" style="font-size: 12px; color: red;"> 수정 </a><a name="delete${b.commentno}" style="font-size: 12px; color: red;">삭제</a><br>`)
					.appendTo(`#replymodal${j.postno} div[class="replies"]`)
					$(`a[name="modify${b.commentno}"]`).click(e=>{
						e.preventDefault()
						alert('수정내용'+ $(`textarea[name="reply${b.commentno}"]`).val())
						let json = {
							commentno : parseInt(b.commentno),
							content : $(`textarea[name="reply${b.commentno}"]`).val()
						}
						$.ajax({
							url : context +'/reply/update/'+b.commentno,
							type:'PUT',
							data: JSON.stringify(json),
							dataType :'json',
							contentType : 'application/json',
							success : d =>{
								$(`#replymodal${j.postno}`).modal("hide")
								$(`#replymodal${j.postno}`).modal()
							},
							error: 	e =>{
								alert('ajax 실패')
							}
						})
						
					})
					
					$(`a[name="delete${b.commentno}"]`).click(e=>{
						e.preventDefault()
						alert('삭제번호 클릭'+ b.commentno)
						let json = {
							commentno : parseInt(b.commentno)
						}
						$.ajax({
							url:context +'/reply/delete/'+b.commentno,
							type:'DELETE',
							data: JSON.stringify(json),
							dataType :'json',
							contentType : 'application/json',
							success : d =>{
								$(`#replymodal${j.postno}`).modal("hide")
								$(`#replymodal${j.postno}`).modal()
								
							},
							error: 	e =>{
								alert('ajax 실패')
							}
						})
					})
				}
				else{
					$(`<p>#${b.content} <b>${b.userno}</b></p>`)
					.appendTo(`#replymodal${j.postno} div[class="replies"]`)
				}
			})
		})
		$(`#replymodal${j.postno}`).modal()
	}
	
	let writeReply =j=>{
		$(`#replymodal${j.postno} a[name="insertreply"]`).click(e=>{
			alert(`댓글등록 클릭`+$(`#replymodal${j.postno} textarea[name="comment"]`).val())
		e.preventDefault()
		let json = {
			postno : parseInt(j.postno),
			userno : parseInt(sessionStorage.getItem('userno')),
			content : $(`#replymodal${j.postno} textarea[name="comment"]`).val()
		}
			$.ajax({
				url: context +'/reply/create',
				type:'POST',
				data: JSON.stringify(json),
				dataType :'json',
				contentType : 'application/json',
				success : d =>{
					$(`#replymodal${j.postno}`).modal("hide")
					$(`#replymodal${j.postno}`).modal()
					
				},
				error: 	e =>{
					alert('ajax 실패')
				}
			})
		})
	}
	
	let infinitePage =x=>{
		let firtPage = 0
		$(window).scroll(function() {
			if ($(window).scrollTop() == $(document).height() - $(window).height()) {
				let nextPage = ++firtPage
				$.getJSON(context+'/post/infintelist/'+x.pageSize+'/'+ nextPage, d=>{
					let endPage = d.pxy.endPage
					if(nextPage != endPage+1){
						recent_updates({ pageSize: x.pageSize, currPage: nextPage})
					}else{
						alert('마지막 페이지입니다.')
						
					}
				})
			}
		})
		
	}
	let infiniteReply =x=>{
		let firtPage = 0
		$(window).scroll(function() {
			if ($(window).scrollTop() == $(document).height() - $(window).height()) {
				let nextPage = ++firtPage
				$.getJSON(context+'/post/infintelist/'+x.pageSize+'/'+ nextPage, d=>{
					let endPage = d.pxy.endPage
					if(nextPage != endPage+1){
						recent_updates({ pageSize: x.pageSize, currPage: nextPage})
					}else{
						alert('마지막 페이지입니다.')
						
					}
				})
			}
		})
		
	}
	
	return { onCreate }
})()
	/*let write=()=>{
		$('<button>', { type:'button', text :'Publish'})
		.addClass('btn btn-success btn-sm')
		.appendTo('#write_form')
		.click(e=>{
			e.preventDefault()
				let json ={
					userno : parseInt(sessionStorage.getItem('userno')),
					content: $('#exampleModal textarea').val()
				}
			alert('userno'+json.userno)
			$.ajax({
				url: context +'/post/',
				type:'PUT',
				data: JSON.stringify(json),
				dataType :'json',
				contentType : 'application/json',
				success : d =>{
					$('#exampleModal').modal("hide")
					onCreate()						
				},
				error : e =>{
					alert('ajax 실패')
				}
			})
		})
		$('<input>',{type:"file",id:"upload"})
		.appendTo('.modal-body')
		$('<i>')
		.addClass('fas fa-camera-retro p-1 border rounded mt-1')
		.appendTo('.modal-body')
		.click(e=>{
			e.preventDefault()
			let formData = new FormData()
			let files = $('#upload')[0].files  
			let i = 0
			for(i=0; i<files.length; i++){
				formData.append("uploadFile",files[i])
			}
			$.ajax({
				url:context+'/post/fileupload',
				processData:false,
				contentType:false,
				data:formData,
				type:'POST',
				success:d=>{
					alert('파일업로드성공')
				},
				error:d=>{
					alert('파일업로드 실패')
				}
			})
		})
	}*/
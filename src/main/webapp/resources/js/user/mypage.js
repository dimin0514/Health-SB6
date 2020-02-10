var mypage = mypage || {}
mypage = (() => {
	let context, img, css, js
	let mypage_vue_js
	let brd_js
	let app_js,navi_vue_js, auth_js, routine_js
	let height , weight ,bmi
	let currentTitle;
//	let calendarBody;
	let first ,pageYear ,pageFirst

	let init = () => {
		height = sessionStorage.getItem('height')
		weight = sessionStorage.getItem('weight')
		context = $.ctx()
		img = $.img()
		css = $.css()
		js = $.js()
		mypage_vue_js = js + '/vue/user/mypage_vue.js'
		brd_js = js + '/brd/brd.js'
		app_js = js + '/app.js'
		navi_vue_js = js + '/vue/menu/navi_vue.js'
		auth_js  = js + '/user/auth.js'
		routine_js = js + '/user/routine.js'
		
	}
	let onCreate = () => {
		init()
		$.when(
			$.getScript(mypage_vue_js),
			$.getScript(brd_js),
			$.getScript(routine_js),
			$.getScript(app_js),
			$.getScript(navi_vue_js),
			$.getScript(auth_js)
			
		).done(() => {
			setContentView()
			gomodify()
			gochart()
			goroutine()
			gohelgram()
			goHome()
			RecipePage()
		}).fail(() => {
			alert('조졌다')
		})
	}
	let setContentView = () => {
		$('head').append(login_vue.login_head())
		$('.masthead2').remove()
		$('.page-footer').remove()
		$('#mainpage').empty()
		$('<div id="contents" class="container" style="margin-top : 80px;"></div>').appendTo('#mainpage')
		$('#contents').append(mypage_vue.mypage_main())
		$('h1[class="text-center"]').text('어서오세요'+ sessionStorage.getItem('uname') +'님')
	}
	let gomodify = () => {
		$('a[class="myModify"] span')
			.click(e => {
				e.preventDefault()
				$('.masthead').remove()
				$('.page-footer').remove()
				$('#mainpage').empty()
				$('<div id="contents" class="container" style="margin-top : 80px;"></div>').appendTo('#mainpage')
				$('#contents').append(mypage_vue.mypage_modify({ css: $.css() }))
			})
		$('#security').click(e=>{
			e.preventDefault()
			alert('클릭')
		})
	}
	let RecipePage =()=>{
		$('a[class="myRecipe"] span').click(e=>{
			e.preventDefault()
			$('.masthead').remove()
			$('.page-footer').remove()
			$('#mainpage').empty()
			$('<div id="contents" class="container" style="margin-top : 80px;"></div>').appendTo('#mainpage')
			$('#contents').append(mypage_vue.mypage_recipe())
			goRecipe({currPage : 0})
		})
	}
	let goRecipe =x=>{
			$.getJSON(context + '/recipe/info/'+x.currPage+'',d=>{
				$('div[class="row"]').empty()
				$('ul[class="pagination"]').empty()
				console.log(d)
				let page = d.pagination
				let list = d.recipe
//				alert(`page :::  ${page.startRow}`)
//				alert(`자바스크립트로 넘어온 값  :${JSON.stringify(page)}`)
				
				$.each(list,(i,j)=>{
					$(`<div class="col-lg-4" style="float : left; width: 350px;height:300px; margin-bottom:110px;">
						<div class="card-deck" style="
						    width: 336px;
						    height: 300px;
						    margin-bottom : 110px;
						">
					   <div class="card" style="width : 336px; height : 300px;">
					   <img id="recipe_img" src="${j.FIMG}" class="card-img-top" alt="">
					   <div class="card-body" style="height : 120px;">
					   <h5 class="card-title"><a href="${j.LINK}">${j.FNAME}</a></h5>
					  
					   </div>
						</div>
					   </div>`).appendTo('div[class="row"]')
				})
				$('#recipe_img').popover('show')
				if(page.existPrev){
					$(`<li class="page-item"><a class="page-link" href="#">
					   <span aria-hidden="true">&laquo;</span>
					   <span class="sr-only">Previous</span>
					   </a>
					   </li>`).prependTo('ul[class="pagination"]').click(e=>{
						   e.preventDefault()
						   alert('이전클릭')
						   goRecipe({currPage : page.prevBlock})
					   })
				}
					   for(let i =page.startPage; i<=page.endPage; i++){
						   if(page.currPage == i){
							   $(`<li class="page-item"><a class="page-link" href="#">${i+1}</a></li>`)
							   .appendTo('ul[class="pagination"]')
							   .click(e=>{
								   alert(`${i+1} 클릭`)
								   $('html').scrollTop(0)
							   })
						   }else{
							   $(`<li class="page-item"><a class="page-link" href="#">${i+1}</a></li>`)
							   .appendTo('ul[class="pagination"]')
							   .click(function(e){
								   e.preventDefault()
								   alert(`${i + 1}클릭`)
								   goRecipe({currPage : i})
								   $('html').scrollTop(0)
							})
						   }
					   }
				if(page.existNext){
					$(`<li class="page-item">
					   <a class="page-link" href="#" aria-label="Next">
					   <span aria-hidden="true">&raquo;</span>
					   <span class="sr-only">Next</span>
					   </a>
					   </li>`).appendTo('ul[class="pagination"]').click(e=>{
						   e.preventDefault()
						   alert('다음 클릭')
						   goRecipe({currPage : page.nextBlock})
					   })
				}
			})
	}
	let gochart =()=>{
		$('a[class="myChart"] span'  )
		.click(e=>{
			e.preventDefault()
		$('.masthead').remove()
		$('.page-footer').remove()
		$('#mainpage').empty()
		$('<div id="contents" class="container" style="margin-top : 80px;"></div>').appendTo('#mainpage')
		$('#contents').append(mypage_vue.mypage_chart(css))
		bmi_chart()
		bmi_calc()
		showCalendar()
			var ctx4 = $('#myChart4');
			var myLineChart = new Chart(ctx4, {
				type: 'line',
				data: {
					labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
					datasets: [	{
						label: '내 월 별 근골격량',
						data: [0, 10, 5, 2, 20, 30, 45, 25, 35, 65, 23 ,11],
						backgroundColor: '#ff0066',
						borderColor: 'rgb(200, 0, 0)',
						borderWidth : 1,
						pointRadius : 5,
						pointHoverRadius : 10,
						pointBorderColor: 'yellow'
						},
						{label: '회원 평균 근골격량',
						borderColor: '#0000ff',
						data: [35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35, 35],
						pointRadius : 5,
						pointHoverRadius : 10,
						fill:false
						}]
				},
				options: {
					maintainAspectRatio : false,
					}
				});
			})
	}
   let showCalendar =()=>{
	   var currentTitle = document.getElementById('current-year-month');
	   var calendarBody = document.getElementById('calendar-body');
	   var today = new Date();
	   var first = new Date(today.getFullYear(), today.getMonth(),1);
	   var dayList = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	   var monthList = ['January','February','March','April','May','June','July','August','September','October','November','December'];
	   var leapYear=[31,29,31,30,31,30,31,31,30,31,30,31];
	   var notLeapYear=[31,28,31,30,31,30,31,31,30,31,30,31];
	   var pageFirst = first;
	   var pageYear;
	   if(first.getFullYear() % 4 === 0){
	       pageYear = leapYear;
	   }else{
	       pageYear = notLeapYear;
	   }
	   function showCalendar(){
	       let monthCnt = 100;
	       let cnt = 1;
	       for(var i = 0; i < 6; i++){
	           var $tr = document.createElement('tr');
	           $tr.setAttribute('id', monthCnt);   
	           for(var j = 0; j < 7; j++){
	               if((i === 0 && j < first.getDay()) || cnt > pageYear[first.getMonth()]){
	                   var $td = document.createElement('td');
	                   $tr.appendChild($td);     
	               }else{
	                   var $td = document.createElement('td');
	                   $td.textContent = cnt;
	                   $td.setAttribute('id', cnt);                
	                   $tr.appendChild($td);
	                   cnt++;
	               }
	           }
	           monthCnt++;
	           calendarBody.appendChild($tr);
	       }
	   }
	   showCalendar();
	   function removeCalendar(){
	       let catchTr = 100;
	       for(var i = 100; i< 106; i++){
	           var $tr = document.getElementById(catchTr);
	           $tr.remove();
	           catchTr++;
	       }
	   }
	   function prev(){
		    inputBox.value = "";
		    const $divs = document.querySelectorAll('#input-list > div');
		    $divs.forEach(function(e){
		      e.remove();
		    });
		    const $btns = document.querySelectorAll('#input-list > button');
		    $btns.forEach(function(e1){
		      e1.remove();
		    });
		    if(pageFirst.getMonth() === 1){
		        pageFirst = new Date(first.getFullYear()-1, 12, 1);
		        first = pageFirst;
		        if(first.getFullYear() % 4 === 0){
		            pageYear = leapYear;
		        }else{
		            pageYear = notLeapYear;
		        }
		    }else{
		        pageFirst = new Date(first.getFullYear(), first.getMonth()-1, 1);
		        first = pageFirst;
		    }
		    today = new Date(today.getFullYear(), today.getMonth()-1, today.getDate());
		    currentTitle.innerHTML = monthList[first.getMonth()] + '&nbsp;&nbsp;&nbsp;&nbsp;'+ first.getFullYear();
		    removeCalendar();
		    showCalendar();
		    showMain();
		    clickedDate1 = document.getElementById(today.getDate());
		    clickedDate1.classList.add('active');
		    clickStart();
		    reshowingList();
		}

		function next(){
		    inputBox.value = "";
		    const $divs = document.querySelectorAll('#input-list > div');
		    $divs.forEach(function(e){
		      e.remove();
		    });
		    const $btns = document.querySelectorAll('#input-list > button');
		    $btns.forEach(function(e1){
		      e1.remove();
		    });
		    if(pageFirst.getMonth() === 12){
		        pageFirst = new Date(first.getFullYear()+1, 1, 1);
		        first = pageFirst;
		        if(first.getFullYear() % 4 === 0){
		            pageYear = leapYear;
		        }else{
		            pageYear = notLeapYear;
		        }
		    }else{
		        pageFirst = new Date(first.getFullYear(), first.getMonth()+1, 1);
		        first = pageFirst;
		    }
		    today = new Date(today.getFullYear(), today.getMonth() + 1, today.getDate());
		    currentTitle.innerHTML = monthList[first.getMonth()] + '&nbsp;&nbsp;&nbsp;&nbsp;'+ first.getFullYear();
		    removeCalendar();
		    showCalendar(); 
		    showMain();
		    clickedDate1 = document.getElementById(today.getDate());
		    clickedDate1.classList.add('active');  
		    clickStart();
		    reshowingList();
		}
   }
   let bmi_chart =x=>{
	   alert(`입력한 키 : ${height}  입력한 몸무게 : ${weight}`)
	   bmi = Math.floor(weight / ((height /100)* (height/100)))
	   var ctx2 = document.getElementById("myChart2").getContext("2d");
		new Chart(ctx2, {
			type: "tsgauge",
			data: {
				labels : ['저체중','정상','비만','고도비만'],
				datasets: [{
					gaugeLabel : ['저체중','정상','비만','고도비만'],
					backgroundColor: ["#0fdc63", "#fd9704", "lime","lightblue","red"],
					borderWidth: 0,
					gaugeData: {
						value: bmi,
						valueColor: "#ff7143"
					},
					gaugeLimits: [10,18.5,23,25,30,40]
				}]
			},
			options: {
		            events: [],
		            showMarkers: true
			}
		})
   }
   let bmi_calc =()=>{
	   $('<span><h2>당신의 BMI지수 계산기</h2></span>').appendTo('.chart2')
		$('<input/>',{
			id : 'cm',
			placeholder : '키를 입력하세요',
		}).css({'margin-right' : '10px'}).appendTo('.chart2 span')
		$('<input/>',{
			id : 'kg',
			placeholder : '몸무게를 입력하세요'
		}).css({'margin-right' : '10px'}).appendTo('.chart2 span')
		$('<button/>',{
			text : '입력',
			id : 'bmi_btn'
		}).addClass('btn-primary').appendTo('.chart2 span')
		$('#bmi_btn').click(()=>{
			height = $('#cm').val()
			weight = $('#kg').val()
			bmi_chart()
		})
   }
	let goroutine = () => {
		$('a[class="myRoutine"] span')
			.click(e => {
				e.preventDefault()
				routine.onCreate()
			})
	}
	let gohelgram = () => {
		$('a[class="myHelgram"] span')
			.click(e => {
				e.preventDefault()
				brd.onCreate()
			})
	}
	let goHome =()=>{
		$('#home').click(e=>{
			e.preventDefault()
			auth.login_home()
		})
	}
	return { onCreate }
})()
"use strict"
var navi_vue = navi_vue || {}
navi_vue = {
	main_head : x=>{
		return `<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<meta name="description" content="">
		<meta name="author" content="">
		<title>HELL CHANG</title>
		<!-- bootstrap css -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.css" />
		<!-- My css -->
		<link href="${x.css}/all.css" rel="stylesheet">
		<link rel="stylesheet" href="${x.css}/grayscale.css">
		<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">
		<link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet"> 
		<!-- bootstrap cdn ajax, js -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
		<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.js"></script> -->
		<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=7c95ce8d67f3f8eb5ad88326154ecbe0&libraries=services,clusterer,drawing"></script> 

		<!-- js -->
		<script src="${x.js}/app.js"></script>
		<script src="${x.js}/cmm/main_home.js"></script>
		<script src="${x.js}/cmm/router.js"></script>
		<script src="${x.js}/vue/menu/navi_vue.js"></script>
		<script src="${x.js}/vue/menu/main.js"></script>
		<script src="${x.js}/vue/menu/footer.js"></script>
		<script src="${x.js}/user/auth.js"></script>
		<script src="${x.js}/vue/user/login_vue.js"></script>
		<script src="${x.js}/vue/user/join_vue.js"></script>
		<script src="${x.js}/user/join.js"></script>
		<script src="${x.js}/user/routine.js"></script>
		<script src="${x.js}/vue/routine/routine_vue.js"></script>
		<script src="${x.js}/brd/brd.js"></script>
		<script src="${x.js}/brd/profile.js"></script>
		<script src="${x.js}/vue/brd/brd_vue.js"></script>
		<script src="${x.js}/vue/brd/profile_vue.js"></script>
		<script src="${x.js}/vue/user/mypage_vue.js"></script>
		<script src="${x.js}/user/mypage.js"></script>
		<script src="${x.js}/user/existing_routine.js"></script>
`
	},
	toolbar: () => {
		return `<nav class="navbar navbar-expand-lg navbar-light fixed-top navbar-shrink" id="mainNav">
				<div class="container">
				<a id="home" class="navbar-brand js-scroll-trigger" href="#"><strong>Body Maker</strong></a>
				<button class="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
				<i class="fas fa-bars"></i>
				</button>
				<div class="collapse navbar-collapse" id="navbarResponsive">
				<ul class="navbar-nav ml-auto">
				</ul>
				</div>
				</div>
				</nav>
				`
	},
	login_toolbar : ()=>{
		return `<nav class="navbar navbar-expand-lg navbar-light fixed-top navbar-shrink" id="mainNav">
				<div class="container">
				<a id="home" class="navbar-brand js-scroll-trigger" href="#"><strong>Body Maker</strong></a>
				<button class="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
				<i class="fas fa-bars"></i>
				</button>
				<div class="collapse navbar-collapse" id="navbarResponsive">
				<ul class="navbar-nav ml-auto">
				</ul>
				</div>
				</div>
				</nav>`
	},
	toolbar_sub : ()=>{
		return `<header class="masthead">
    			<div id="getStart" class="container d-flex h-100 align-items-center">
      			<div class="mx-auto text-center">
        		<h1 class="mx-auto my-0 text-uppercase animated fadeIn infinite" >Body Maker</h1>
        		<h2 class="text-white-50 mx-auto mt-5 mb-5">환영합니다 이제부터 본격적으로 운동을 시작합시다!!</h2>
        		<div class="plane"><span></span></div>
      			</div>
    			</div>
  				</header>`
	},
	toolbar_sub_head : ()=>{
		return `<style>

				</style>`
	},
	toolbar_sub2 : ()=>{
		return `<header class="masthead2">
    			<div id="getStart" class="container d-flex h-100 align-items-center">
      			<div class="mx-auto text-center">
        		<h1 class="mx-auto my-0 text-uppercase animated zoomIn infinite">여러분의 죽어있는 운동세포를 깨우세요</h1>
        		<h2 class="text-white-50 mx-auto mt-5 mb-5">어서오세요 헬창여러분 루틴을 생성해 운동을 시작하세요</h2>
      			</div>
    			</div>
  				</header>`
	}
}
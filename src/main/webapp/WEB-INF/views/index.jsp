<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="description" content="">
<meta name="author" content="">
<title>HELL CHANG</title>
<!-- bootstrap css -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.css" />
<!-- My css -->
<link href="<%=application.getContextPath()%>/resources/css/all.css" rel="stylesheet">
<link rel="stylesheet" href="<%=application.getContextPath()%>/resources/css/grayscale.css">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">
<link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet">
<link rel="stylesheet" href="<%=application.getContextPath()%>/resources/css/animate.css" />
<link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet"> 
<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
<!-- bootstrap cdn ajax, js -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=7c95ce8d67f3f8eb5ad88326154ecbe0&libraries=services,clusterer,drawing"></script> 
<script src="<%=application.getContextPath()%>/resources/js/cmm/Gauge.js"></script>

<!-- js -->
<script src="<%=application.getContextPath()%>/resources/js/app.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/cmm/main_home.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/cmm/router.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/vue/menu/navi_vue.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/vue/menu/main.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/vue/menu/footer.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/user/auth.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/vue/user/login_vue.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/vue/user/join_vue.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/user/join.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/user/routine.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/vue/routine/routine_vue.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/brd/brd.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/brd/profile.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/vue/brd/brd_vue.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/vue/brd/profile_vue.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/vue/user/mypage_vue.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/user/mypage.js"></script>
<script src="<%=application.getContextPath()%>/resources/js/user/existing_routine.js"></script>


</head>
<body>
<div id="wrapper">
</div>
<script>
app.run('<%=application.getContextPath()%>')
</script>
</body>
</html>
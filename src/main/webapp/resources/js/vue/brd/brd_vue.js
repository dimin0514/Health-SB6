var brd_vue = brd_vue || {}
brd_vue = {
	brd_body: x=>{
		return ` 
			<link href="${x.css}/post.css" rel="stylesheet">
			<div style="margin-top: 0px">
			    <div class="navbar navbar-light sticky-top bg-light">
			        <a class="navbar-brand" href="#"><i class="fab fa-instagram"></i> Healthtagram</a>
			        <div class="search">
			            <em>#HashTags</em> <input type="text" value="검색" style="width: 250px;">
			            <button class="fa fa-search fa-0.5x btn btn-berem" id="bcr_instagsbtn"></button>
			        </div>
			        <ul class="nav">
			            <li class="nav-item dropdown">
			                <button id="btn-profile" class="btn btn-primary btn-md btn-profile"> 프로필 </button>
			            </li>
			        </ul>
			    </div>
			</div>
			<!-- Modal Begin -->
			<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			    <div class="modal-dialog modal-lg" role="document">
			        <div class="modal-content">
			            <div class="modal-body">
			                <textarea name="write" class="form-control" aria-label="With textarea"></textarea>
			                <!--<input class="form-control mr-sm-2 custom-search-modal" type="search" placeholder="" aria-label="Search">-->
			            </div>
			            <div class="modal-footer" id="write_form">
			                <button type="button" class="btn btn-secondary btn-sm" data-dismiss="modal">Cancel</button>
			            </div>
			        </div>
			    </div>
			</div> <!-- modal end -->
			<div class="container-fluid ">
			    <!-- Nav pills -->
			    <ul class="nav nav-pills justify-content-center mt-4" role="tablist">
			        <li class="nav-item">
			            <a class="nav-link" data-toggle="pill" href="#menu1"><i class="fa fa-square" aria-hidden="true"></i></a>
			        </li>
			        <li class="nav-item">
			            <a class="nav-link" data-toggle="pill" href="#menu2"><i class="fa fa-th" aria-hidden="true"></i></a>
			        </li>
			    </ul>
			    <!-- Tab panes -->
			    <div class="tab-content">
			        <div id="menu1" class="container-fluid tab-pane active "><br>
			            <div class="row justify-content-center">
			                <div id="recent_updates">
			                   
			                </div>
			            </div>
			        </div>
			        <div id="menu2" class="container-fluid tab-pane fade" style="text-align: -webkit-center;">
			            <div class="row "style="max-width: 936px; width: 100%; justify-content: space-between;">
			            </div>
			        </div>
			    </div>
			</div>
    `
    },
    brd_write: ()=>{
        return `
			<div class="modal fade" id="myFullsizeModal" tabindex="-1" role="dialog" aria-labelledby="myFullsizeModalLabel">
			    <div class="modal-dialog modal-fullsize" role="document">
			        <div class="modal-content modal-fullsize">
			            <div class="modal-header">
			                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
			                <h4 class="modal-title" id="myModalLabel"></h4>
			            </div>
			            <div class="modal-body">
			                <img class="card-img" src="https://assets.breatheco.de/apis/img/images.php?blob&tags=bobdylan" alt="Card image cap">
			                <input type="text" class="modal-content" value="">
			            </div>
			            <div class="modal-footer">
			                <button type="button" class="btn btn-default" data-dismiss="modal">닫기</button>
			                <button type="button" class="btn btn-default-update" data-dismiss="modal">수정</button>
			            </div>
			        </div>
			    </div>
			</div>        		
        `
    }
}
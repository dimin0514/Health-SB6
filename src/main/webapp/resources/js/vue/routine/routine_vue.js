var routine_vue = routine_vue || {}
routine_vue = {
	routine_page1 : x=>{
		return ` 
		<link rel="stylesheet" href="/web/resources/css/style.css"/>
		<link rel="stylesheet" href="${x.css}/style1.css">
		<div class="container mt-40" style="margin-top : 200px;">
            <h3 class="text-center">Hover Effect Style : Demo - 20</h3>
            <div class="row mt-30">
                <div class="col-md-4 col-sm-6">
                    <div class="box20">
                        <img src="${x.img}/diet.jpg" alt="">
                        <div class="box-content">
                            <h3 class="title">다이어트</h3>
                            <span class="post">최고의 성형은 다이어트</span>
                        </div>
                        <ul class="icon">
                            <li><a id="a_diet" href="#"><i class="fa fa-plus"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class="box20">
                        <img src="${x.img}/power.jpg" alt="">
                        <div class="box-content">
                            <h3 class="title">전문 PT용</h3>
                            <span class="post">새 루틴을 생성하세요</span>
                        </div>
                        <ul class="icon">
                            <li><a id="newRoutine" href="#"><i class="fa fa-plus"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class="box20">
                        <img src="${x.img}/power3.jpg" alt="">
                        <div class="box-content">
                            <h3 class="title">전문 PT용</h3>
                            <span class="post">자기 자신을 고려해 나온 운동과 함께 이번에는 몸을 만들어봅시다</span>
                        </div>
                        <ul class="icon">
                            <li><a href="#"><i class="fa fa-plus"></i></a></li>
                            <li><a href="#"><i class="fa fa-link"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade right" id="fullHeightModalRight" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
				<div class="modal-dialog modal-full-height modal-right" role="document">
				<div class="modal-content">
				<div class="modal-header">
				<h4 class="modal-title w-100" id="myModalLabel">새 루틴 생성</h4>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
				</button>
				</div>
				<div class="modal-body" id="setModal">
					 <div class="form-group">
                            <input type="text" class="form-input" name="height" id="height" placeholder="키를 입력하세여(cm 빼고)"/>
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-input" name="weight" id="weight" placeholder="몸무게를 입력하세요(kg 빼고)"/>
					</div>
					<div class="form-group">
                        <input type="text" class="form-input" name="muscle" id="muscle" placeholder="근골격량을 입력하세요"/>
					</div>
                    <div class="form-group">
                        <input type="text" class="form-input" name="fat" id="fat" placeholder="체지방량을 입력하세요"/>
                    </div>
					<p>본인의 헬스레벨을 선택하세요</p>
					<div class="form-group">
                        <label class="form-check-label" style="position: relative; left: 20px;"><input class="form-check-input" type="radio" name="career" id="career" value="1">헬린이</label>
                    </div>
                    <div class="form-group">
                        <label class="form-check-label" style="position: relative; left: 20px;"><input class="form-check-input" type="radio" name="career" id="career" value="2">초보</label>
                    </div>
                    <div class="form-group">
                        <label class="form-check-label" style="position: relative; left: 20px;"><input class="form-check-input" type="radio" name="career" id="career" value="3">중급</label>
                    </div>
                    <div class="form-group">
                        <label class="form-check-label" style="position: relative; left: 20px;"><input class="form-check-input" type="radio" name="career" id="career" value="4">고급</label>
                    </div>
					<div class="form-group">
                        <select type="text" name="division" onChange={this.onChange.bind(this)} id="division">
							<div id="div_detail"></div>
						</select>
                    </div>
				</div>
				<div class="modal-footer justify-content-center">
					<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
					<input id="save_routine" type="submit" class="btn btn-primary" value="Save" data-dismiss="modal"/>
				</div>
				</div>
			</div>
			</div>`
	},
	exist_style : x=>{
		return `<link rel="stylesheet" href="${x.css}/routine.css" />`
	},
	existRoutine : x=>{
		return `<div class="container">
				<div class="row">
				<div class="col-md-12">
            	<div id="exercise_list"class="main-timeline">
            	</div>
				</div>
				<button id="endbtn" type="button" style="margin: auto; width: 20%;" class="btn btn-secondary">운동완료</button>
				</div>
				</div>`
	},
	exist_style : x=>{
		return `<link rel="stylesheet" href="${x.css}/routine.css" />`
	},
	existRoutine : ()=>{
		return `<div class="container">
				<div class="row">
				<div class="col-md-12">
            	<div id="exercise_list"class="main-timeline">
            	</div>
				</div>
				<button id="endbtn" type="button" style="margin: auto; width: 20%;" class="btn btn-secondary">운동완료</button>
				</div>
				</div>`
	}

}
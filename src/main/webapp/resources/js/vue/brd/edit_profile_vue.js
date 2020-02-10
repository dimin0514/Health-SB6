var edit_profile_vue = edit_profile_vue || {}
edit_profile_vue = {
	edit_profile_body:x=>{
		return `
			<link href="${x.css}/edit_profile.css" rel="stylesheet">
			<div>
				<div style="margin-top: 92px">
				<div class="navbar navbar-light sticky-top bg-light">
				<a class="navbar-brand" href="#" id="go_brdMain"><i class="fab fa-instagram"></i> Healthtagram</a>
			</div>
			<div class="container">
			    <div class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-12 col-xs-12 edit_information">
			        <h3 class="text-center" style="margin-top: 30px;">프로필 정보 수정</h3>
			        <form id="profile_upload_form" method="post" enctype="multipart/form-data">
			            <table class="table">
			                <tr>
			                    <p>
			                        <label for="image">Image:</label>
			                        <br />
			                        <input type="file" name="profile_image" id="profile_image" />
			                    </p>
			                </tr>
			                <tr>
			                    <td>
			                        <div id="profile_image_preview">
			                            <img src="http://placehold.it/180" />
			                            <br />
			                            <a href="#">Remove</a>
			                        </div>
			                    </td>
			                </tr>
			                <tr>
			                    <td>
			                        <div class="form-group">
			                            <label class="profile_details_text"> 짧은 자기 소개 :</label>
			                            <input type="text" name="profile_content" class="form-control" value="" required>
			                        </div>
			                    </td>
			                </tr>
			                <tr>
			                    <td>
			                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 submit">
			                            <div class="form-group">
			                                <input id="btn_edit_profile" type="submit" class="btn btn-success" value="Submit">
			                            </div>
			                        </div>
			                    </td>
			                </tr>
			            </table>
			        </form>
			    </div>
			</div>
	`}
}
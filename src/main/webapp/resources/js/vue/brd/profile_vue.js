var profile_vue = profile_vue || {}
profile_vue = {
	
	profile_body : x=>{
		return `
			<link href="${x.css}/profile.css" rel="stylesheet">
			<div style="margin-top: 92px">
			    <div class="navbar navbar-light sticky-top bg-light">
			        <a class="navbar-brand" href="#" id="go_brdMain"><i class="fab fa-instagram"></i> Healthtagram</a>
			    </div>
			</div>
			<main id="profile">
			    <header class="profile__header">
			        <div class="profile__column">
			            <img src="${x.img}/temp_profile.png" alt="user" />
			        </div>
			        <div class="profile__column">
			            <div class="profile__title">
			                <h3 class="profile__username">${sessionStorage.getItem('uname')}</h3>
			                <button id="btn-edit-profile" class="btn profile-edit-btn">Edit Profile</button>
			                <button id="btn-write" class="btn profile-edit-btn">사진 올리기</button>
			                <i class="fa fa-cog fa-lg"></i>
			            </div>
			            <ul class="profile__stats">
			                <li class="profile__stat">
			                    <span class="stat__number"></span> posts
			                </li>
			                <li class="profile__stat">
			                    <span class="stat__number">1234</span> followers
			                </li>
			                <li class="profile__stat">
			                    <span class="stat__number">36</span> following
			                </li>
			            </ul>
			            <p class="profile__bio">
			                <span class="profile__full-name">
			                    ${sessionStorage.getItem('userid')}
			                </span>
			                <input type="text" style="border: none;">
			            </p>
			        </div>
			    </header>
			    <section class="profile__photos">
			    </section>
			</main>
		`
	},
	write_form: x=>{
		return `
			<div style="margin-top: 92px">
			    <div class="navbar navbar-light sticky-top bg-light">
			        <a class="navbar-brand" href="#" id="go_brdMain"><i class="fab fa-instagram"></i> Healthtagram</a>
			        <a class="navbar-brand" href="#" id="go_profileMain"><i class="far fa-address-card"></i>profile</a>
			    </div>
			    <div class="container">
			        <div class="box">
			            <div class="bigbox">
			                <div class="text">
			                    <hr class="hr" />
			                    사진업로드
			                    <hr class="hr" />
			                </div>
			                <form id="upload_form" accept-charset="UTF-8">
			                    <table class="table">
			                        <tr>
			                            <p>
			                                <label for="image">Image:</label>
			                                <br />
			                                <input type="file" name="image" id="image" />
			                            </p>
			                        </tr>
			                        <tr>
			                            <td>
			                                <div id="image_preview">
			                                    <img src="#" />
			                                    <br />
			                                    <a href="#">Remove</a>
			                                </div>
			                            </td>
			                        </tr>
			                        <tr>
			                            <td><input type="text" id="content" name="content" placeholder="이미지 소개"></td>
			                        </tr>
			                        <tr>
			                            <td><input type="text" id="location" name="location" placeholder="위치"></td>
			                        </tr>
			                        <tr>
			                            <td><input type="text" id="tagname" name="tagname" placeholder="#태그"></td>
			                        </tr>
			                    </table>
			                </form>
			            </div>
			        </div>
			    </div>
			</div>		
		`
	}
}
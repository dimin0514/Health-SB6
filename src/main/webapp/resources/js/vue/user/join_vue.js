var join_vue = join_vue || {}
join_vue = {
	join_head: () => {
		return `<link rel="stylesheet" href="/web/resources/css/style.css"/>`
	},
	join_ui: x => {
        return `
        <div class="main">
        <section class="signup">
            <div class="container2">
                <div class="signup-content">
                    <form method="POST" id="signup-form" class="signup-form">
                        <h2 class="form-title">어서와 헬린이들 Welcome!!</h2>
                        <div class="form-group">
                            <input type="text" class="form-input" name="userid" id="userid" placeholder="아이디를 입력하세요"/>
                            <span id="id_check" class="error-box"  style role="alert"></span>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-input" name="passwd" id="passwd" placeholder="비밀번호를 입력하세요"/>
                            <span id="pwd_check" class="error-box"  style role="alert"></span>
                        </div>
                        <div class="form-group">
                            <input type="password" class="form-input" name="re_password" id="re_password" placeholder="비밀번호 재입력"/>
                            <span class="error_next_box" id="pwd2_check" style="display : block;" aria-live="assertive"></span>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-input" name="uname" id="uname" placeholder="이름을 입력칸"/>
                            <span toggle="#password" class="zmdi zmdi-eye field-icon toggle-password"></span>
                        </div>
                        <div class="form-group">
                            <input type="text" class="form-input" name="age" id="age" placeholder="나이를 입력하세요"/>
                        </div>
                        <fieldset class="form-group">
                        <div class="row">
                            <legend class="col-form-label col-sm-2 pt-0">성별</legend>
                            <div class="col-sm-10">
                                <div class="form-check">
                                <input class="form-check-input" type="radio" name="gridRadios" id="gender" value="male" checked>
                                <label class="form-check-label" for="gridRadios1">남성</label>
                                </div>
                                <div class="form-check">
                                <input class="form-check-input" type="radio" name="gridRadios" id="gender" value="female" checked>
                                <label class="form-check-label" for="gridRadios2">여성</label>
                                </div>
                        </div>
                        </div>
                        </fieldset>
                        <div class="form-group">
                            <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                            <label for="agree-term" class="label-agree-term"><span><span></span></span>I agree all statements in  <a href="#" class="term-service">Terms of service</a></label>
                        </div>
                        <div class="form-group">
                            <input type="submit" name="submit"  class="form-submit" value="Sign up"/>
                        </div>
                    </form>
                    <p class="loginhere">
                        Have already an account ?
                    </p>
                </div>
            </div>
        </section>
    </div>`
	}
}
"use strict"
var main = main || {}
main = {
	main_vue: x => {
		return `<section id="about" class="about-section text-center">
    			<div class="container">
      			<div class="row">
        		<div class="col-lg-8 mx-auto">
          		<h2 class="text-white mb-4">여러분의 능력에 맞게 루틴을 만들어드립니다</h2>
                <p class="text-white-50">헬린이들을 위한 운동 지식이 없는 분들을  위한 맟춤프로그램 루틴에 맞게 운동 후 자신을 돌아보세요
              	<a  href="http://startbootstrap.com/template-overviews/grayscale/">the preview  page</a>여러분의 운동의 눈을 뜨게 해드립니다.</p>
                </div>
                </div>
                <iframe width="713" height="401"  src="https://www.youtube.com/embed/H-AcDBLqxi4" frameborder="0"  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen></iframe>
                </div>
				</section>

				<section id="projects" class="projects-section bg-light">
				<div class="container">
				<div class="row align-items-center no-gutters mb-4 mb-lg-5">
				<div class="col-xl-8 col-lg-7">
				<img class="img-fluid mb-3 mb-lg-0" src="${x.img}/12.png" alt="">
				</div>
				<div class="col-xl-4 col-lg-5">
				<div class="featured-text text-center text-lg-left">
				<h4>Shoreline</h4>
				<p class="text-black-50 mb-0">Grayscale is open source and MIT licensed. This means you can use it for any project - even commercial projects! Download it, customize it, and publish your website!</p>
				</div>
				</div>
				</div>
				<div class="row justify-content-center no-gutters mb-5 mb-lg-0">
				<div class="col-lg-6">
				<img class="img-fluid" src="${x.img}/13.png" alt="">
				</div>
				<div class="col-lg-6">
				<div class="bg-black text-center h-100 project">
				<div class="d-flex h-100">
				<div class="project-text w-100 my-auto text-center text-lg-left">
				<h4 class="text-white">Misty</h4>
				<p class="mb-0 text-white-50">An example of where you can put an image of a project, or anything else, along with a description.</p>
				<hr class="d-none d-lg-block mb-0 ml-0">
				</div>
				</div>
				</div>
				</div>
				</div>
				<div class="row justify-content-center no-gutters">
				<div class="col-lg-6">
				<img class="img-fluid" src="${x.img}/14.png" alt="">
				</div>
				<div class="col-lg-6 order-lg-first">
				<div class="bg-black text-center h-100 project">
				<div class="d-flex h-100">
				<div class="project-text w-100 my-auto text-center text-lg-right">
				<h4 class="text-white">Mountains</h4>
				<p class="mb-0 text-white-50">Another example of a project with its respective description. These sections work well responsively as well, try this theme on a small screen!</p>
				<hr class="d-none d-lg-block mb-0 mr-0">
				</div>
				</div>
				</div>
				</div>
				</div>
				</div>
				</section>`
	}
}
"use strict"
var app = (()=>{
	const MSG = "ERROR ERROR"
	let context,js
	let main_home_js

	let init =()=>{
		context = $.ctx()
		js = $.js()
		main_home_js = js + '/cmm/main_home.js'
	}
	let run =x=>{
		$.getScript(x+'/resources/js/cmm/router.js',()=>{
			$.extend(new Session(x))
			onCreate()
		})
	}
	let onCreate =()=>{
		init()
		$.when($.getScript(main_home_js))
		.done(()=>{
			main_home.onCreate()
		})
		.fail(()=>{MSG})
	}
	return { run }
})()


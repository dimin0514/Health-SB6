function Session(x){
	sessionStorage.setItem('ctx',x)
	sessionStorage.setItem('css',x+'/resources/css')
	sessionStorage.setItem('img',x+'/resources/img')
	sessionStorage.setItem('js',x+'/resources/js')
	

	return {
		ctx : ()=>{return sessionStorage.getItem('ctx')},
		css : ()=>{return sessionStorage.getItem('css')},
		img : ()=>{return sessionStorage.getItem('img')},
		js : ()=>{return sessionStorage.getItem('js')}
	}
}
function Users(t){
	sessionStorage.setItem('userno',t.userno);
	sessionStorage.setItem('userid',t.userid);
	sessionStorage.setItem('uname',t.uname);
	sessionStorage.setItem('age',t.age);
	sessionStorage.setItem('gender',t.gender);
	sessionStorage.setItem('weight',t.weight);
	sessionStorage.setItem('height',t.height);
	sessionStorage.setItem('fat',t.fat);
	sessionStorage.setItem('muscle',t.muscle);
	return {
		userno : ()=>{return sessionStorage.getItem('userno');},
		userid : ()=>{return sessionStorage.getItem('userid');},
		uname : ()=>{return sessionStorage.getItem('uname');},
		age : ()=>{return sessionStorage.getItem('age');},
		gender : ()=>{return sessionStorage.getItem('gender');},
		weight : ()=>{return sessionStorage.getItem('weight');},
		height : ()=>{return sessionStorage.getItem('height');},
		fat : ()=>{return sessionStorage.getItem('fat');},
		muscle : ()=>{return sessionStorage.getItem('muscle');}
	}
}

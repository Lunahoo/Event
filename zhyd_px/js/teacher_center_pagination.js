  let vm = new Vue({
  el: '#app',
  data: {
    course:''
  },
  mounted() {
	var _this = this;
				$.ajax({
					method:'POST',
					data:{
						page:1,
						pagesize:12
					},
					dataType:'json',
					url:'http://zhyd.oraclebay.com/services/teacherlist.php',
					async:false,
					success:function (result) {
						_this.course = result.info;
					}
				})
}				
});


function start() {
	// generate a timeline
	var timeline1 = new TimelineMax({onComplete: question1})
	// get one element(TweenMax) - include flow
	var triangeRotate = TweenMax.to(".start #triangle_top", 4, {rotation:360});
	var triangeRotate2 = TweenMax.to(".start #triangle_bottom", 4, {rotation:360});
	// add element to timeline
	// triangle rotation 360 degree at 4s
	timeline1.add(triangeRotate,0);
	timeline1.add(triangeRotate2,0);
	//circle change scale 4s 
	timeline1.add(
		TweenMax.to(".start .circle", 2, {scale:1.13}),0
		);
	timeline1.add(
		TweenMax.to(".start .circle", 2, {scale:1}),2
		);
	// square rotation -360 degree at 4s
	timeline1.add(
		TweenMax.to(".start .square", 4, {rotation:-360}),0
		);
	// square over 
	timeline1.add(
		TweenMax.to(".start .square", 1, {scale:5}), 4);
	// circle over 
	timeline1.add(
		TweenMax.to(".start .circle", 1, {scale:5}), 4.2);
	// triangle over
	timeline1.add(
		TweenMax.to(".start .triangle", 1, {scale:5}), 4.4);
	// 變成透明
	// square
	timeline1.add(
		TweenMax.to(".start .square", 0.5, {opacity: 0}), 4.6);
	// circle
	timeline1.add(
		TweenMax.to(".start .circle", 0.5, {opacity: 0}), 4.6);
	// triangle
	timeline1.add(
		TweenMax.to(".start .triangle", 0.5, {opacity: 0}), 4.6);
	// title
	timeline1.add(
		TweenMax.to(".start .title", 0.5, {opacity: 0}), 4.6);
}

function question1() {
	var timeline = new TimelineMax();
	document.getElementsByClassName("start")[0].style.display = "none" ;
	document.getElementsByClassName("question1")[0].style.display = "block" ;

	// show back_paper
	timeline.add(
		TweenMax.to(".question1 .back_paper", 2, {left: 600}), 0);
	// show other sharp
	timeline.add(
		TweenMax.to(".question1 .square", 2, {top: 110}), 2);
	timeline.add(
		TweenMax.to(".question1 .triangle", 2, {top: 320}), 2);
	timeline.add(
		TweenMax.to(".question1 .circle", 2, {top: 500}), 2);
	// 旋轉
	timeline.add(
		TweenMax.to(".question1 .square", 2, {rotation:360}), 4);
	timeline.add(
		TweenMax.to(".question1 .triangle", 2, {rotation:-360}), 4);	
}

function question2(num) {
	console.log("num = "+ num);
	var timeline = new TimelineMax();
	document.getElementsByClassName("question1")[0].style.display = "none" ;
	document.getElementsByClassName("question2")[0].style.display = "block" ;

	// show back_paper
	timeline.add(
		TweenMax.to(".question2 .back_paper", 2, {left: 0}), 0);
	// show other sharp
	timeline.add(
		TweenMax.to(".question2 .square", 2, {top: 240}), 2);
	timeline.add(
		TweenMax.to(".question2 .triangle", 2, {top: -40}), 2);
	timeline.add(
		TweenMax.to(".question2 .circle", 2, {top: 410}), 2);
	// 旋轉
	timeline.add(
		TweenMax.to(".question2 .square", 3, {rotation:-390}), 4);
	timeline.add(
		TweenMax.to(".question2 .triangle", 1.6, {rotation:200, left: -60}), 4);
	timeline.add(
		TweenMax.to(".question2 .triangle", 1.5, {rotation:400, left: 120}), 5.5);
	timeline.add(
		TweenMax.to(".question2 .circle", 1.5, {top: 450}), 4);	
	timeline.add(
		TweenMax.to(".question2 .circle", 1.5, {top: 410}), 5.5);	

	// result_triangle()
}

function question3(num) {
	console.log("num = "+ num);
	var timeline = new TimelineMax();
	document.getElementsByClassName("question2")[0].style.display = "none" ;
	document.getElementsByClassName("question3")[0].style.display = "block" ;

	// show back_paper
	timeline.add(
		TweenMax.to(".question3 .back_paper", 2, {left: 600}), 0);
	// show other sharp
	timeline.add(
		TweenMax.to(".question3 .square", 2, {top: 90}), 2);
	timeline.add(
		TweenMax.to(".question3 .triangle", 2, {top: 500}), 2);
	timeline.add(
		TweenMax.to(".question3 .circle", 2, {top: -120}), 2);
	// 旋轉
	timeline.add(
		TweenMax.to(".question3 .square", 2, {rotation:-20}), 4);
	timeline.add(
		TweenMax.to(".question3 .triangle", 2, {rotation:370}), 4);	
	timeline.add(
		TweenMax.to(".question3 .circle", 2, {top: -100,left: 800}), 4);	
}

function count(num) {
	console.log("num = "+ num);
}

function caculate1(num) {
	var timeline = new TimelineMax( {onComplete: caculate2} );

	document.getElementsByClassName("question3")[0].style.display = "none" ;
	document.getElementsByClassName("caculate1")[0].style.display = "block" ;

	timeline.from(".caculate1",1, {
		opacity:0
	},0)
	.set(".caculate1 .triangle1", {
        top: '65%',
        left: '-58%'
	},0 )
	.set(".caculate1 .triangle2", {
        top: '93%',
        left: '-53%'
	},0 )
	.set(".caculate1 .triangle3", {
        top: '110%',
        left: '-25%'
	},0 )
	.set(".caculate1 .triangle4", {
        top: '151%',
        left: '0%'
	},0 )
	.set(".caculate1 .triangle5", {
        top: '99%',
        left: '-21%'
	},0 );

	// 移動
	timeline.add(
		TweenMax.to(".caculate1 .triangle3", 1, {top: '-70%',left: '80%'}), 1);
	timeline.add(
		TweenMax.to(".caculate1 .triangle5", 1, {top: '-18%',left: '109%'}), 1);
	timeline.add(
		TweenMax.to(".caculate1 .triangle2", 1, {top: '-95%',left: '103%'}), 2);
	timeline.add(
		TweenMax.to(".caculate1 .triangle4", 1, {top: '-10%',left: '121%'}), 2);
	timeline.add(
		TweenMax.to(".caculate1 .triangle1", 1, {top: '-117%',left: '78%'}), 3);

	timeline.from(".caculate1",0, {
		opacity:0
	},4)
	.set(".caculate1 .triangle1", {
        top: '65%',
        left: '-58%'
	},4 )
	.set(".caculate1 .triangle2", {
        top: '93%',
        left: '-53%'
	},4 )
	.set(".caculate1 .triangle3", {
        top: '110%',
        left: '-25%'
	},4 )
	.set(".caculate1 .triangle4", {
        top: '151%',
        left: '0%'
	},4 )
	.set(".caculate1 .triangle5", {
        top: '99%',
        left: '-21%'
	},4 );


	// 移動
	timeline.add(
		TweenMax.to(".caculate1 .triangle3", 1, {top: '-70%',left: '80%'}), 4);
	timeline.add(
		TweenMax.to(".caculate1 .triangle5", 1, {top: '-18%',left: '109%'}), 5);
	timeline.add(
		TweenMax.to(".caculate1 .triangle2", 1, {top: '-95%',left: '103%'}), 5);
	timeline.add(
		TweenMax.to(".caculate1 .triangle4", 1, {top: '-10%',left: '121%'}), 5);
	timeline.add(
		TweenMax.to(".caculate1 .triangle1", 1, {top: '-117%',left: '78%'}), 6);


	timeline.from(".caculate1",0, {
		opacity:0
	},7)
	.set(".caculate1 .triangle1", {
        top: '65%',
        left: '-58%'
	},7 );

	timeline.add(
	 	TweenMax.to(".caculate1 .triangle1", 1, {scale:10}), 7);
		timeline.add(
	TweenMax.to(".caculate1", 1, {opacity: 0}), 7);
}

function caculate2() {
	var timeline = new TimelineMax(  {onComplete: caculate3}  );

	document.getElementsByClassName("caculate1")[0].style.display = "none" ;
	document.getElementsByClassName("caculate2")[0].style.display = "block" ;

	timeline.from(".caculate2",1, {
		opacity:0
	},0)
	.set(".caculate2 .square1", {
        top: '50%',
        left: '-68%'
	},0 )
	.set(".caculate2 .square2", {
        top: '110%',
        left: '-90%'
	},0 )
	.set(".caculate2 .square3", {
        top: '70%',
        left: '-35%'
	},0 )
	.set(".caculate2 .square4", {
        top: '170%',
        left: '-70%'
	},0 )
	.set(".caculate2 .square5", {
        top: '110%',
        left: '-28%'
	},0 )
	.set(".caculate2 .square6", {
        top: '110%',
        left: '30%'
	},0 );

	// 移動
	timeline.add(
		TweenMax.to(".caculate2 .square6", 1, {top: '-70%',left: '80%'}), 1);
	timeline.add(
		TweenMax.to(".caculate2 .square1", 1, {top: '-95%',left: '103%'}), 1);
	timeline.add(
		TweenMax.to(".caculate2 .square3", 1, {top: '-18%',left: '109%'}), 2);
	timeline.add(
		TweenMax.to(".caculate2 .square2", 1, {top: '-70%',left: '78%'}), 2);
	timeline.add(
		TweenMax.to(".caculate2 .square4", 1, {top: '-10%',left: '121%'}), 3);
	timeline.add(
		TweenMax.to(".caculate2 .square5", 1, {top: '-117%',left: '60%'}), 3);

	timeline.from(".caculate2",0, {
		opacity:0
	},4)
	.set(".caculate2 .square1", {
        top: '50%',
        left: '-68%'
	},4 )
	.set(".caculate2 .square2", {
        top: '110%',
        left: '-90%'
	},4 )
	.set(".caculate2 .square3", {
        top: '70%',
        left: '-35%'
	},4 )
	.set(".caculate2 .square4", {
        top: '170%',
        left: '-70%'
	},4 )
	.set(".caculate2 .square5", {
        top: '110%',
        left: '-28%'
	},4 )
	.set(".caculate2 .square6", {
        top: '110%',
        left: '30%'
	},4 );

	// 移動
	timeline.add(
		TweenMax.to(".caculate2 .square1", 1, {top: '-95%',left: '103%'}), 4);
	timeline.add(
		TweenMax.to(".caculate2 .square3", 1, {top: '-18%',left: '109%'}), 4);
	timeline.add(
		TweenMax.to(".caculate2 .square4", 1, {top: '-10%',left: '121%'}), 4);
}

function caculate3() {
	var timeline = new TimelineMax({onComplete: result_triangle});

	document.getElementsByClassName("caculate2")[0].style.display = "none" ;
	document.getElementsByClassName("caculate3")[0].style.display = "block" ;

	timeline.from(".caculate3",1, {
		opacity:0
	},0)
	.set(".caculate3 .circle1", {
        top: '90%',
        left: '-30%'
	},0 )
	.set(".caculate3 .circle2", {
        top: '80%',
        left: '-20%'
	},0 )
	.set(".caculate3 .circle3", {
        top: '70%',
        left: '-65%'
	},0 )
	.set(".caculate3 .circle4", {
        top: '100%',
        left: '-40%'
	},0 )
	.set(".caculate3 .circle5", {
        top: '120%',
        left: '-40%'
	},0 );


	// 移動
	timeline.add(
		TweenMax.to(".caculate3 .circle5", 1, {top: '-120%',left: '100%'}), 1);
	timeline.add(
		TweenMax.to(".caculate3 .circle3", 1, {top: '-10%',left: '110%'}), 2);
	timeline.add(
		TweenMax.to(".caculate3 .circle1", 1, {top: '10%',left: '119%'}), 3);
	timeline.add(
		TweenMax.to(".caculate3 .circle4", 1, {top: '10%',left: '100%'}), 3);
	timeline.add(
		TweenMax.to(".caculate3 .circle2", 1, {top: '0%',left: '100%'}), 4);

	timeline.from(".caculate3",0, {
		opacity:0
	},5)
	.set(".caculate3 .circle1", {
        top: '90%',
        left: '-30%'
	},5 )
	.set(".caculate3 .circle2", {
        top: '80%',
        left: '-20%'
	},5)
	.set(".caculate3 .circle3", {
        top: '70%',
        left: '-65%'
	},5 )
	.set(".caculate3 .circle4", {
        top: '100%',
        left: '-40%'
	},5 )
	.set(".caculate3 .circle5", {
        top: '120%',
        left: '-40%'
	},5 );

	// 移動
	timeline.add(
		TweenMax.to(".caculate3 .circle5", 1, {top: '-120%',left: '100%'}), 5);
	timeline.add(
		TweenMax.to(".caculate3 .circle4", 1, {top: '10%',left: '100%'}), 6);
	timeline.add(
		TweenMax.to(".caculate3 .circle2", 1, {top: '0%',left: '100%'}), 6);
	timeline.add(
		TweenMax.to(".caculate3  .block1 h2", 0.1, {color: 'white'}), 7);
	timeline.add(
		TweenMax.to(".caculate3  .block1 p", 0.1, {color: 'white'}), 7);
	timeline.add(
		TweenMax.to(".caculate3 .circle3", 1, {scale: 10}), 7);

}

function result_triangle() {
	var timeline = new TimelineMax();

	document.getElementsByClassName("caculate3")[0].style.display = "none" ;
	document.getElementsByClassName("result_triangle")[0].style.display = "block" ;

	timeline.from(".result_triangle",1, {
		opacity:0
	},0)
	.set(".result_triangle .triangle1", {
        left: '5%',
        top: '-10%'
	},0 )
	.set(".result_triangle .triangle2", {
        left: '15%',
        top: '-50%'
	},0 )
	.set(".result_triangle .triangle3", {
        left: '25%',
        top: '0%'
	},0 )
	.set(".result_triangle .triangle4", {
        left: '27%',
        top: '-35%'
	},0 )
	.set(".result_triangle .triangle5", {
        left: '65%',
        top: '-45%'
	},0 )
	.set(".result_triangle .triangle6", {
        left: '75%',
        top: '-10%'
	},0 )
	.set(".result_triangle .triangle7", {
        left: '90%',
        top: '-20%'
	},0 )

	.set(".result_triangle .triangle_b1", {
        left: '30%',
        bottom: '-40%'
	},0 )
	.set(".result_triangle .triangle_b2", {
        left: '33%',
        bottom: '-40%'
	},0 )
	.set(".result_triangle .triangle_b3", {
        left: '38%',
        bottom: '-48%'
	},0 );

	// 移動
	timeline.add(
		TweenMax.to(".result_triangle .triangle1", 3, {top: '4%'}), 1);
	timeline.add(
		TweenMax.to(".result_triangle .triangle2", 3, {top: '0%'}), 1);
	timeline.add(
		TweenMax.to(".result_triangle .triangle3", 3, {top: '50%'}), 1);
	timeline.add(
		TweenMax.to(".result_triangle .triangle4", 3, {top: '15%'}), 1);
	timeline.add(
		TweenMax.to(".result_triangle .triangle5", 3, {top: '5%'}), 1);
	timeline.add(
		TweenMax.to(".result_triangle .triangle6", 3, {top: '40%'}), 1);
	timeline.add(
		TweenMax.to(".result_triangle .triangle7", 3, {top: '30%'}), 1);
	timeline.add(
		TweenMax.to(".result_triangle .triangle_b1", 3, {bottom: '0%'}), 1);
	timeline.add(
		TweenMax.to(".result_triangle .triangle_b2", 3, {bottom: '0%'}), 1);
	timeline.add(
		TweenMax.to(".result_triangle .triangle_b3", 3, {bottom: '-8%'}), 1);

	// 移動
	timeline.add(
		TweenMax.to(".result_triangle .triangle3", 2, {left: '57%',top: '31%'}), 4);
	timeline.add(
		TweenMax.to(".result_triangle .triangle4", 2, {left: '57%',top: '39%'}), 4);
	timeline.add(
		TweenMax.to(".result_triangle .triangle5", 2, {left: '57%',top: '47%'}), 4);

	timeline.add(
		TweenMax.to(".result_triangle .triangle1", 2, {top: '-10%'}), 4);
	timeline.add(
		TweenMax.to(".result_triangle .triangle2", 2, {top: '-50%'}), 4);
	timeline.add(
		TweenMax.to(".result_triangle .triangle6", 2, {top: '-10%'}), 4);
	timeline.add(
		TweenMax.to(".result_triangle .triangle7", 2, {top: '-20%'}), 4);
	timeline.add(
		TweenMax.to(".result_triangle .result_descript", 2, {top: '10%',left: '57%'}), 4);
	timeline.add(
		TweenMax.to(".result_triangle .result_type", 2,{top: '15%',left: '57%'}), 4);

	timeline.add(
		TweenMax.to(".result_triangle .show", 0.1,{display: 'block'}), 6);

	timeline.add(
		TweenMax.to(".result_triangle .triangle_b1", 4,{
			left: '10%',bottom: '24%',
			borderWidth: '0 180 310'
		}), 4);
	timeline.add(
		TweenMax.to(".result_triangle .triangle_b2", 4,{
			left: '13%',bottom: '39%',
			borderWidth: '0 180 310',
			transform:'rotate(80deg)'
		}), 4);
	timeline.add(
		TweenMax.to(".result_triangle .triangle_b3", 4,{
			left: '7%',bottom: '44%',
			borderWidth: '0 180 310',
			transform:'rotate(-70deg)'
		}), 4);
}

function restart() {
	document.getElementsByClassName("result_triangle")[0].style.display = "none" ;
	document.getElementsByClassName("start")[0].style.display = "block" ;	
	start();
}

start() ;
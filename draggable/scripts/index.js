var app = angular.module("app",['ngDraggable']);
	app.controller('tzCtrl',function($scope){  
		//第一次循环的数组
		$scope.lists = [
			{
				name: '12',
				className: 'list12',
				count: [
					{
						id: 1,
						num: 'col-md-12 column'
					}
				]
				
			},
			{
				name: '3 9',
				className: 'list39',
				count: [
					{
						id: 2,
						num: 'col-md-3 column'
					},{
						id: 3,
						num: 'col-md-9 column'
					}
				]
			},
			{
				name: '4 8',
				className: 'list48',
				count: [
					{
						id: 4,
						num: 'col-md-4 column'
					},{
						id: 5,
						num: 'col-md-8 column'
					}
				]
			},
			{
				name: '5 7',
				className: 'list57',
				count: [
					{
						id: 6,
						num: 'col-md-5 column'
					},{
						id: 7,
						num: 'col-md-7 column'
					}
				]
			},
			{
				name: '6 6',
				className: 'list66',
				count: [
					{
						id: 8,
						num: 'col-md-6 column'
					},{
						id: 9,
						num: 'col-md-6 column'
					}
				]
			},
			{
				name: '4 5 3',
				className: 'list453',
				count: [
					{
						id: 10,
						num: 'col-md-4 column'
					},{
						id: 11,
						num: 'col-md-5 column'
					},{
						id: 12,
						num: 'col-md-3 column'
					}
				]
			},
			{
				name: '3 6 3',
				className: 'list363',
				count: [
					{
						id: 13,
						num: 'col-md-3 column'
					},{
						id: 14,
						num: 'col-md-5 column'
					},{
						id: 15,
						num: 'col-md-3 column'
					}
				]
			},
			{
				name: '2 7 3',
				className: 'list273',
				count: [
					{
						id: 16,
						num: 'col-md-2 column'
					},{
						id: 17,
						num: 'col-md-7 column'
					},{
						id: 18,
						num: 'col-md-3 column'
					}
				]
			},
			{
				name: '2 8 2',
				className: 'list282',
				count: [
					{
						num: 'col-md-2 column'
					},{
						num: 'col-md-8 column'
					},{
						num: 'col-md-2 column'
					}
				]
			}
		];
		$scope.listImg = [
			{
				name: '文本框',
				className: '文本框'
			}
		]
		//被拖拽元素
//		$scope.currentElement = '';
//		//drop时放置元素
//		$scope.eve = '';
//		$scope.mouse = function(event,item,parent){ 
//			console.log(event)
//			$scope.currentElement = angular.element(event.target);
//		};
//		//drop函数
//		$scope.dropElement= function(data,event){
//			//copy当前拖拽的元素
//			$scope.eve = angular.copy(event.element[0]);
//			console.log($scope.eve);
////			console.log($scope.currentElement)
//			//将拖拽元素放置在drop元素中
////			$scope.currentElement.append($scope.eve);
//			//将拖拽元素清空
//			$scope.eve = '';
//		};
		//点击时删除该元素
//		$scope.moveElement = function(event){
//			console.log('111');
//			console.log(event);
//			$scope.removeEle = event;
//		}
		//				$scope.$apply($scope.moveElement(event));
	});
  
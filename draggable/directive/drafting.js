angular.module('app').directive('ngA', function($compile) {
	var eve = null;
	var currentElement = null;
	return {

		restrict: 'EA',
		link: function(scope, ele, attr, index) {
			//被拖拽元素
			scope.currentElement = '';
			//drop时放置元素
			scope.eve = '';
			scope.mouse = function(event) {
				currentElement = scope.currentElement = angular.element(event.target);
			};
			//drop函数
			scope.dropElement = function(data, event, index) {
				console.log(data);
				var name = data.className;
				var x = '';
				switch(name) {
					case 'list12':
						x = '<div class="lyrow"><a href="#close" class="remove label label-danger"><i class="glyphicon-remove glyphicon"></i> 删除</a><span class="drag label label-default"  ng-click="dragClick($event)"><i class="glyphicon glyphicon-move"></i> 拖动</span><div class="preview"><input type="text" value="12" class="form-control"></div><div class="view"><div class="row clearfix"><div class="col-md-12 column"></div></div></div></div>';
						break;
					case 'list66':
						x = '<div class="lyrow"><a href="#close" class="remove label label-danger"><i class="glyphicon-remove glyphicon"></i> 删除</a><span class="drag label label-default" ng-click="dragClick($event)"><i class="glyphicon glyphicon-move"></i> 拖动</span><div class="preview"><input type="text" value="6 6" class="form-control"></div><div class="view"><div class="row clearfix"><div class="col-md-6 column"></div><div class="col-md-6 column"></div></div></div></div>';
						break;
					case 'list48':
						x = '<div class="lyrow"><a href="#close" class="remove label label-danger"><i class="glyphicon-remove glyphicon"></i> 删除</a><span class="drag label label-default" ng-click="dragClick($event)"><i class="glyphicon glyphicon-move"></i> 拖动</span><div class="preview"><input type="text" value="4 8" class="form-control"></div><div class="view"><div class="row clearfix"><div class="col-md-4 column"></div><div class="col-md-8 column"></div></div></div></div>';
						break;
					case 'list57':
						x = '<div class="lyrow"><a href="#close" class="remove label label-danger"><i class="glyphicon-remove glyphicon"></i> 删除</a><span class="drag label label-default" ng-click="dragClick($event)"><i class="glyphicon glyphicon-move"></i> 拖动</span><div class="preview"><input type="text" value="5 7" class="form-control"></div><div class="view"><div class="row clearfix"><div class="col-md-5 column"></div><div class="col-md-7 column"></div></div></div></div>';
						break;
					case 'list39':
						x = '<div class="lyrow"><a href="#close" class="remove label label-danger"><i class="glyphicon-remove glyphicon"></i> 删除</a><span class="drag label label-default" ng-click="dragClick($event)"><i class="glyphicon glyphicon-move"></i> 拖动</span><div class="preview"><input type="text" value="3 9" class="form-control"></div><div class="view"><div class="row clearfix"><div class="col-md-3 column"></div><div class="col-md-9 column"></div></div></div></div>';
						break;
					case 'list453':
						x = '<div class="lyrow"><a href="#close" class="remove label label-danger"><i class="glyphicon-remove glyphicon"></i> 删除</a><span class="drag label label-default" ng-click="dragClick($event)"><i class="glyphicon glyphicon-move"></i> 拖动</span><div class="preview"><input type="text" value="4 5 3" class="form-control"></div><div class="view"><div class="row clearfix"><div class="col-md-4 column"></div><div class="col-md-5 column"></div><div class="col-md-3 column"></div></div></div></div>';
						break;
					case 'list363':
						x = '<div class="lyrow"><a href="#close" class="remove label label-danger"><i class="glyphicon-remove glyphicon"></i> 删除</a><span class="drag label label-default" ng-click="dragClick($event)"><i class="glyphicon glyphicon-move"></i> 拖动</span><div class="preview"><input type="text" value="3 6 3" class="form-control"></div><div class="view"><div class="row clearfix"><div class="col-md-3 column"></div><div class="col-md-6 column"></div><div class="col-md-3 column"></div></div></div></div>';
						break;
					case 'list273':
						x = '<div class="lyrow"><a href="#close" class="remove label label-danger"><i class="glyphicon-remove glyphicon"></i> 删除</a><span class="drag label label-default" ng-click="dragClick($event)"><i class="glyphicon glyphicon-move"></i> 拖动</span><div class="preview"><input type="text" value="2 7 3" class="form-control"></div><div class="view"><div class="row clearfix"><div class="col-md-2 column"></div><div class="col-md-7 column"></div><div class="col-md-3 column"></div></div></div></div>';
						break;
					case 'list282':
						x = '<div class="lyrow"><a href="#close" class="remove label label-danger"><i class="glyphicon-remove glyphicon"></i> 删除</a><span class="drag label label-default" ng-click="dragClick($event)"><i class="glyphicon glyphicon-move"></i> 拖动</span><div class="preview"><input type="text" value="2 8 2" class="form-control"></div><div class="view"><div class="row clearfix"><div class="col-md-2 column"></div><div class="col-md-8 column"></div><div class="col-md-2 column"></div></div></div></div>';
						break;
					case '文本框':
						x = '<div class="box box-element ui-draggable"><a href="#close" class="remove label label-danger"><i class="glyphicon glyphicon-remove"></i> 删除</a><span class="drag label label-default ui-draggable-handle" ng-click="dragClick($event)"><i class="glyphicon glyphicon-move"></i> 拖动</span><div class="preview">文本框</div><div class="view" id="textFrame"><form role="form"><div class="form-group"><label for="name"></label><input type="text" class="form-control pwd click text" id="textBox" placeholder="请输入名称" ng-model="ppp"><div class="col-xs-12 promptMessage" id="messageHide" style="display: none; color: red;">*只能输入长度为6~10位的字母或数字</div></div></form></div></div>';
						break;
				}

				//copy当前拖拽的元素
				eve = scope.eve = x;
				var content = $compile(eve)(scope);
				//将拖拽元素放置在drop元素中
				currentElement.append(content);
				//将拖拽元素清空
				scope.eve = '';
			};

			scope.dragClick = function(event) {
				//获取当前元素
				var e = $compile(event.target)(scope);
				//判断当前元素是否有drag类名
				if(e.hasClass('drag')) {
					console.log('drag');
					//获取所有能拖拽元素
					var vv = angular.element(document.querySelector('.demo').querySelectorAll('.lyrow'));
					for(var i = 0; i < vv.length; i++) {
						//清除拖动
						angular.element(vv[i]).removeAttr('ng-drag');
						angular.element(vv[i]).removeAttr('draggable');
						angular.element(vv[i]).removeClass('ng-scope');
						angular.element(vv[i]).removeClass('ng-over');
						//$compile(vv[i])(scope);
					}
//					angular.element(document).find('.demo .lyrow').removeAttr('ng-drag');
					//给当前元素的父元素加拖动
					e.parent().attr('ng-drag', 'true');
					$compile(e.parent())(scope);
					

				}
//				$compile(angular.element(document.querySelector('.demo')))(scope);
				
			}

		}

	}

})
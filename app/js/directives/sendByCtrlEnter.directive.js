function sendByCtrlEnter(){
    return function(scope, element, attrs){
        
        element.bind('keydown', function (event) {
            if (event.ctrlKey && event.which === 13) {
                scope.$apply(function(){
                    scope.$eval(attrs.sendByCtrlEnter);
                });

                event.preventDefault();
            }
        });
    }
}

angular.module('cbsChat')
    .directive('sendByCtrlEnter', [sendByCtrlEnter])
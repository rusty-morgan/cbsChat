function purifyDate(){
    return function(scope, element, attrs){
        
        var rowDate = attrs.purifyDate;

        //var d = new Date(rowDate);
        //console.log(d);
        //console.log(d.getHours()+':'+d.getMinutes());
    }
}

angular.module('cbsChat')
    .directive('purifyDate', [purifyDate])
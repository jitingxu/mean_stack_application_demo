angular.module('app').controller('mvMainCtrl', function($scope) {
    $scope.courses = [
        {name: 'Algorithm', featured: true, published: new Date('08/08/2012')},
        {name: 'Data Mining', featured:true, published: new Date('08/08/2012')},
        {name: 'Statistical Analysis', featured:true, published:new Date('08/08/2012')},
        {name: 'Compiler', featured:true, published: new Date('02/01/2013')},
        {name: 'Pattern Recognition', featured:true, published: new Date('02/01/2013')},
        {name: 'Big Data', featured:true, published: new Date('02/01/2013')},
        {name: 'Computer Architecture', featured:true, published: new Date('08/01/2013')},
        {name: 'Information retrieval Model and Algorithm', featured:true, published: new Date('08/01/2013')},
        {name: 'Build APP using Mean Stack', featured:false, published: new Date('04/17/2014')},
        {name: 'Data Structure and Algorithm in Java', featured:false, published: new Date('02/01/2014')},
        {name: 'MongoDB Class', featured:false, published: new Date('05/01/2014')},
        {name: 'Drupal Camp', featured:false, published: new Date('04/18/2014')},
        {name: 'Open Hack in Columbia', featured:false, published: new Date('04/10/2014')},
        {name: 'Spring and Hibernate in Java', featured:false, published: new Date('05/10/2014')},
        {name: 'Design Pattern', featured:false, published: new Date('05/02/2014')},
        {name: 'Hadoop', featured:false, published: new Date('04/25/2014')},
    ]
});
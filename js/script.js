function drawTree (treeHeight) {
    var space = "";

    for (var k = treeHeight; k >= 1; k--) {
            space += " ";
        }    

    for (var i = 1; i <= treeHeight; i++) {
        var star = "";
        
        for (var j = 1; j <= i; j++) {
            star += "* ";
            var newSpace = space.substr(0, (treeHeight - j));
        } 
        
        console.log(newSpace + star);
    }
};

drawTree(10);
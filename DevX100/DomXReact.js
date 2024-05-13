<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo</title>
    <script>
        var globalId = 1;
        function createChild(title, description, id){
            const child = document.createElement('div');
            const firstGrandchild = document.createElement('div');
            firstGrandchild.innerHTML = title;
            const secondGrandchild = document.createElement('div');
            secondGrandchild.innerHTML = description;
            const thirdGrandchild = document.createElement('button');
            thirdGrandchild.innerHTML = "Mark As Done";
            thirdGrandchild.setAttribute('onclick',`markAsDone(${id})`);
            child.appendChild(firstGrandchild);
            child.appendChild(secondGrandchild);
            child.appendChild(thirdGrandchild);
            child.setAttribute('id', id);
            return child;
        }
        function addTodo(){
            const title = document.getElementById("title").value;
            const description = document.getElementById("description").value;
            document.getElementById("container").appendChild(createChild(title, description, globalId++));           
        }
        function markAsDone(id) {
            const parent = document.getElementById(`${id}`);
            parent.children[2].innerHTML = "Done!";
        }

    </script>
</head>
<body>
    <br><br><br>
    <center>
        <input type="text" name="title" id="title" placeholder="Todo Title"> <br><br>
        <input type="text" name="description" id="description" placeholder="Describe the Todo"> <br><br>
        <input type="button" value="Add-Todo" onclick="addTodo()">
        <br><br>
        <div id="container"></div>
    </center>
</body>
</html>

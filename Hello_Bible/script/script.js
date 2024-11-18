const input = document.getElementById('todoInput');
        const addButton = document.getElementById('addButton');
        const todoList = document.getElementById('todoList');

        // Enter 키를 눌렀을 때 추가
        input.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                addTodoItem(input.value.trim());
                input.value = ''; // 입력란 초기화
            }
        });

        // 버튼 클릭 시 추가
        addButton.addEventListener('click', function() {
            addTodoItem(input.value.trim());
            input.value = ''; // 입력란 초기화
        });

        function addTodoItem(todo) {
            if (todo) {
                const li = document.createElement('li');
                li.textContent = todo;
                
                const deleteButton = document.createElement('button');
                deleteButton.textContent = '삭제';
                deleteButton.onclick = function() {
                    todoList.removeChild(li); // 해당 항목 삭제
                };

                li.appendChild(deleteButton);
                todoList.appendChild(li);
            }
        }
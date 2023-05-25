/*--------------------------------------------------------------
# 表格設定
--------------------------------------------------------------*/
$(document).ready(function () {
    $('#mytable').DataTable({
        "autoWidth": true,
        "info": true,
        "language": {
            "search": "搜尋：",
            "lengthMenu": "顯示 _MENU_ 筆資料",
            "info": "第 _START_ 至 _END_ 筆資料，共 _TOTAL_ 筆",
            "paginate": {
                "first": "第一頁",
                "last": "最後一頁",
                "next": "下一頁",
                "previous": "上一頁"
            },
            "zeroRecords": "查無符合資料的紀錄",
            "columnDefs":[
              {
                targets: [0],
                width: "40%", 
              },
            ],
            
        }  
    });
    
    $('thead tr:first-child td').css('text-align', 'center');
});



/*--------------------------------------------------------------
# 滑鼠監聽
--------------------------------------------------------------*/

var links = document.getElementsByClassName("myLink");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("mouseover", function() {
    changeColor(this);
  });

  links[i].addEventListener("mouseout", function() {
    restoreColor(this);
  });
}

function changeColor(element) {
  element.style.color = "#47B2E4";
  element.style.textDecoration = "underline";
}

function restoreColor(element) {
  element.style.color = ""; 
  element.style.textDecoration = "none"; 
}

/*--------------------------------------------------------------
# 
--------------------------------------------------------------*/


  
  
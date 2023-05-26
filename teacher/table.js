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




function restoreColor(element) {
  element.style.color = ""; 
  element.style.textDecoration = "none"; 
}

/*--------------------------------------------------------------
# 
--------------------------------------------------------------*/


  
  
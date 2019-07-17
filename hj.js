var mockData = {
  "result": {
    "20191": {
      "dt": "20190203",
      "cert": "평가원",
      "bunyaMap": {
        "엔지니어링": {
          "snList": [
            "김이박",
            "박이김",
            "이박김"
          ],
          "swList": [
            "최유윤",
            "유윤최"
          ],
          "mnList": [
            "오서손",
            "손서오",
            "손오서",
            "오손서"
          ],
          "mwList": [
            "김이박",
            "박이김",
            "이박김"
          ]
        },
        "재무상담": {
          "snList": [
            "김이박",
            "박이김",
            "이박김"
          ],
          "swList": [
            "최유윤",
            ""
          ],
          "mnList": [
            "오서손",
            "손오서",
            "오손서"
          ],
          "mwList": ""
        },
        "영업판매": {
          "snList": [
            "김이박",
            "박이김",
            "이박김"
          ],
          "swList": [
            "최유윤",
            "유윤최"
          ],
          "mnList": [
            "오서손",
            "손서오",
            "손오서",
            "오손서"
          ],
          "mwList": [
            "김이박",
            "박이김",
            "이박김"
          ]
        }
      }
    },
    "201932": {
      "dt": "20190706",
      "cert": "평가원",
      "bunyaMap": {
        "집에가기": {
          "snList": [
            "김이박",
            "박이김",
            "이박김"
          ],
          "swList": [
            "최유윤",
            "유윤최"
          ],
          "mnList": [
            "오서손",
            "손서오",
            "손오서",
            "오손서"
          ],
          "mwList": [
            "김이박",
            "박이김",
            "이박김"
          ]
        },
        "신기술개발": {
          "snList": [
            "김이박",
            "박이김",
            "이박김"
          ],
          "swList": [
            "최유윤",
            "유윤최"
          ],
          "mnList": [
            "오서손",
            "손서오",
            "손오서",
            "오손서"
          ],
          "mwList": [
            "김이박",
            "박이김",
            "이박김"
          ]
        }
      }
    }
  },
  "maxCntMap": {
    "snMaxCnt": "3",
    "swMaxCnt": "2",
    "mnMaxCnt": "4",
    "mwMaxCnt": "3"
  }
};

const snMinCnt = 3;
const swMinCnt = 3;
const mnMinCnt = 3;
const mwMinCnt = 3;

var maxCntMap = mockData.maxCntMap;

var snMaxCnt = parseInt(maxCntMap.snMaxCnt);
var swMaxCnt = parseInt(maxCntMap.swMaxCnt);
var mnMaxCnt = parseInt(maxCntMap.mnMaxCnt);
var mwMaxCnt = parseInt(maxCntMap.mwMaxCnt);

snMaxCnt = (snMaxCnt < snMinCnt) ? snMinCnt : snMaxCnt;
swMaxCnt = (swMaxCnt < swMinCnt) ? swMinCnt : swMaxCnt;
mnMaxCnt = (mnMaxCnt < mnMinCnt) ? mnMinCnt : mnMaxCnt;
mwMaxCnt = (mwMaxCnt < mwMinCnt) ? mwMinCnt : mwMaxCnt;

var result = mockData.result;

//테이블 헤더부분
var table = '<table border="1">' +
              '<thead>' +
                '<tr>' +
                  '<th rowspan="2">번호</th>' +
                  '<th rowspan="2">회차</th>' + 
                  '<th rowspan="2">분야</th>' +
                  '<th rowspan="2">날짜</th>' +
                  '<th rowspan="2">마감여부</th>' +
                  '<th colspan="'+(snMaxCnt+swMaxCnt)+'" align="center">서류</th>' +
                  '<th colspan="'+(mnMaxCnt+mwMaxCnt)+'" align="center">면접</th>' +
                  '<th rowspan="2">인적성기관</th>' +
                 '</tr>' +
                '<tr>' +
                  '<th colspan="'+snMaxCnt+'">내부</th>' +
                  '<th colspan="'+swMaxCnt+'">외부</th>' +
                  '<th colspan="'+mnMaxCnt+'">내부</th>' +
                  '<th colspan="'+mwMaxCnt+'">외부</th>' +
                '</tr>' +
              '</thead>' +
            '<tbody>';
var seq = 1;

for(var orders in result) {
  
  var data = result[orders];
  var dt = data.dt;
  var cert = data.cert;
  var status = '진행중';
  var bunyaMap = data.bunyaMap;
  
  var bunyaCnt, snCnt, swCnt, mnCnt, mwCnt;
  var listMap, snList, swList, mnList, mwList;
  
  bunyaCnt = Object.keys(bunyaMap).length;
  
  table += '<tr>';
  
  bunyaList = Object.entries(bunyaMap);
  
  for(var i = 0; i < bunyaList.length; i++) {
    table += '<tr>';
    
    if(i === 0) {
      var year = orders.substring(0, 4);
      var cha = orders.substring(4, orders.length);
      table += '<td rowspan="'+bunyaCnt+'">'+(seq++)+'</td>' +
               '<td rowspan="'+bunyaCnt+'">'+year+'년 '+cha+'차'+'</td>';
    }
    
    table += '<td>'+bunyaList[i][0]+'</td>';
    
    if(i === 0) {
      table += '<td rowspan="'+bunyaCnt+'">'+dt+'</td>' +
               '<td rowspan="'+bunyaCnt+'">'+status+'</td>';
    }
    
    listMap = bunyaList[i][1];
    snList = listMap.snList;
    swList = listMap.swList;
    mnList = listMap.mnList;
    mwList = listMap.mwList;
    
    for(var snidx = 0; snidx < snMaxCnt; snidx++) {
      if(snidx > snList.length - 1) {
        table += '<td class="applct" align="center"></td>'
      }
      else{
        table += '<td class="applct" align="center">'+snList[snidx]+'</td>'
      }
    }
   
    for(var swidx = 0; swidx < swMaxCnt; swidx++) {
      if(swidx > swList.length - 1) {
        table += '<td class="applct" align="center"></td>'
      }
      else{
        table += '<td class="applct" align="center">'+swList[swidx]+'</td>'
      }
    }
    
    for(var mnidx = 0; mnidx < mnMaxCnt; mnidx++) {
      if(mnidx > mnList.length - 1) {
        table += '<td class="applct" align="center"></td>'
      }
      else{
        table += '<td class="applct" align="center">'+mnList[mnidx]+'</td>'
      }
    }
    
    for(var mwidx = 0; mwidx < mwMaxCnt; mwidx++) {
      if(mwidx > mwList.length - 1) {
        table += '<td class="applct" align="center"></td>'
      }
      else{
        table += '<td class="applct" align="center">'+mwList[mwidx]+'</td>'
      }
    }
    
    if(i === 0) {
      table += '<td rowspan="'+bunyaCnt+'">'+cert+'</td>';
    }
    
    table += '</tr>';
  }
  
  table += '</tr>';
}

table += '</tbody></table>';

var grid = document.getElementById('grid');
grid.innerHTML = table;

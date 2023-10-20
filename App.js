import React from "react";
import "./App.css";

function App() {
  return (
    <div className="admin_body">
      <div class="line-right">
      <header class="admin_header">
        <div class="main-title">
          <span>바른생각<br />바른주점</span>
        </div>
        <div class="digital-clock" id="digital-clock">
          <script src="script.js"></script>
        </div>
      </header>
      <nav class="admin_nav">
        <div class="info_table">
          <p class="info_title">남자 테이블 수</p>
          <div class="info_num">1</div>
        </div>
        <div class="info_table">
          <p class="info_title">여자 테이블 수</p>
          <div class="info_num">1</div>
        </div>
        <div class="info_table">
          <p class="info_title">혼성 테이블 수</p>
          <div class="info_num">1</div>
        </div>
        <div class="info_table">
          <p class="info_title">합성 테이블 수</p>
          <div class="info_num">1</div>
        </div>
        <div class="info_table">
          <p class="info_title">빈 테이블 수</p>
          <div class="info_num">1</div>
        </div>
      </nav>
      <div class="admin_container">
        <button class="table_choice">선택</button>
      </div>
      
      <footer>
        <div class="admin-footer">
          <div class="footer-button">
            <button class="time-plus">시간 추가</button>
            <button class="heart-plus">하트 충전</button>
            <button class="table-exit">퇴장 처리</button>
            <button class="table-mix">합석 처리</button>
          </div>
        </div>
      </footer>
    </div>
    </div>
  );
}

export default App;

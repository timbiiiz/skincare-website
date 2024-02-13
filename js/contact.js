// お問い合わせフォームの送信イベントを取得
document.getElementById("contactForm").addEventListener("submit", function(e) {
    
  // 各入力フィールドの値を取得
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const passwordConfirm = document.getElementById("passwordConfirm").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  // 名前の検証: 未入力、または10文字を超える場合はエラー
  if (!name || name.length > 10) {
      alert("名前を正しく入力してください。");
      e.preventDefault();  // フォームの送信をキャンセル
      return;
  }

  // 電話番号の検証: 数字とハイフン以外の文字を含む場合はエラー
  const phonePattern = /^[0-9\-]+$/;
  if (!phone.match(phonePattern)) {
      alert("正しい電話番号の形式で入力してください。");
      e.preventDefault();
      return;
  }

  // パスワードの検証: 二つのパスワードフィールドの値が一致しない場合はエラー
  if (password !== passwordConfirm) {
      alert("入力されたパスワードが一致しません。");
      e.preventDefault();
      return;
  }

  // 件名の検証: 未入力、または30文字を超える場合はエラー
  if (!subject || subject.length > 30) {
      alert("件名を正しく入力してください。");
      e.preventDefault();
      return;
  }

  // お問い合わせ内容の検証: 未入力、または200文字を超える場合はエラー
  if (!message || message.length > 200) {
      alert("お問い合わせ内容を正しく入力してください。");
      e.preventDefault();
      return;
  }
});
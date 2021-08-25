const preset_elm: HTMLInputElement = <HTMLInputElement>(
  document.getElementById("preset")
);
let key_name: string | null;

const preset_prefix: string = "tp_";

window.onload = () => {
  Push.Permission.request();

  let preset_content = document.querySelectorAll(".preset");
  if (localStorage.length > 0) {
    for (let i = 0; i < preset_content.length; ++i) {
      preset_content[i].classList.add("isActive");
    }
  }
  generateChoices();
};

function generateChoices() {
  for (let i = 0; i < localStorage.length; ++i) {
    let li = document.createElement("option");
    key_name = localStorage.key(i);
    if (key_name?.includes(preset_prefix)) {
      li.textContent = key_name.slice(3);
      li.setAttribute("value", i.toString());
      preset_elm.appendChild(li);
    } else {
      continue;
    }
  }
}

function togglePresetElm() {
  const ul = document.querySelector(".preset_wrapper");
  ul?.classList.toggle("open");
}

type Preset = {
  work_min: number;
  work_sec: number;
  break_min: number;
  break_sec: number;
};

function generatePattern() {
  let preset_name: string | null = prompt(
    "プリセット名を入力してください",
    "無題のプリセット"
  );
  if (typeof preset_name !== "string") throw alert("キャンセルされました。");

  let w_min: string | null = prompt("集中したい分数を入力してください", "0");
  if (typeof w_min !== "string") throw alert("キャンセルされました。");

  let w_sec: string | null = prompt("集中したい秒数を入力してください", "0");
  if (typeof w_sec !== "string") throw alert("キャンセルされました。");

  let b_min = prompt("休憩したい分数を入力してください", "0");
  if (typeof b_min !== "string") throw alert("キャンセルされました。");

  let b_sec = prompt("休憩したい秒数を入力してください", "0");
  if (typeof b_sec !== "string") throw alert("キャンセルされました。");

  if (w_min == "0" && w_sec == "0" && b_min == "0" && b_sec == "0") {
    throw alert("すべての入力値が0です");
  }

  let raw_preset: Preset = {
    work_min: parseInt(w_min) * 60,
    work_sec: parseInt(w_sec),
    break_min: parseInt(b_min) * 60,
    break_sec: parseInt(b_sec),
  };

  savePattern(raw_preset, preset_name);
}

/**
 * savePattern.
 *
 * @param {Preset} preset_obj
 * @param {string} preset_name
 */
function savePattern(preset_obj: Preset, preset_name: string) {
  let obj = JSON.stringify(preset_obj);

  localStorage.setItem(preset_prefix + preset_name, obj);
  location.reload();
}

function applyPreset() {
  let no: HTMLInputElement = <HTMLInputElement>(
    document.getElementById("preset").value
  );
  key_name = localStorage.key(no);
  let extracted_val = JSON.parse(localStorage.getItem(key_name));

  setFormValue("focus_min", extracted_val.work_min / 60);
  setFormValue("focus_sec", extracted_val.work_sec);
  setFormValue("break_min", extracted_val.break_min / 60);
  setFormValue("break_sec", extracted_val.break_sec);
}

function removePreset(btn: HTMLInputElement) {
  key_name = localStorage.key(btn.value);
  localStorage.removeItem(key_name);
  location.reload();
}

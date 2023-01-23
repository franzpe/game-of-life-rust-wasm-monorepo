use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern "C" {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) -> String {
    format!("Hello {}", name)
}

#[wasm_bindgen]
pub fn alert_greet(name: &str) -> () {
    alert(&format!("Hello {}", name));
}

# 系統規則

Knave 是由 Ben Milton 所創建的遊戲系統，主要的特色有：

- 相容於各種 Old School Renaissance 系統
- 快速教學、簡易遊玩
- 沒有職業分類

DolaTRPG 所使用的版本會與原系統略有出入。

相關連結：

- [Knave](https://www.drivethrurpg.com/product/250888/Knave)
- [Knave 介紹](https://www.youtube.com/watch?v=Mtf3vDycfmE)
- [Knave 規則](https://img.fireden.net/tg/image/1535/41/1535415977929.pdf)
- [規則好閱讀版本](https://drive.google.com/file/d/1h5-eEC4yTQSnJhigiz5JjueHjnJ_hobG/view)

## 屬性

角色有六個屬性 (ability)

- STR (strength)
  - 檢定：力量
  - 近戰攻擊的命中
- DEX (dexterity)
  - 檢定：平衡、速度、反應
- CON (consitution)
  - 檢定：毒物抗性、疾病、寒冷
  - 可以攜帶的物品數量等同於 consitution 數值
- INT (intelligence)
  - 檢定：集中精神、精準度
- WIS (wisdom)
  - 檢定：觀察、感知
  - 遠程攻擊的命中
- CHA (charisma)
  - 檢定：說服、欺騙、訊問、魅惑
  - 可以雇用等同 CHA bonus 的傭人

每個屬性都會有目標值 (ability defense) 跟修正值 (ability bonus)，修正值恆等於 (目標值-10)，每個屬性的目標值基礎為 11 (同時代表獎勵值 = +1)。

### 檢定

當角色必須面臨可能失敗的情況時，投擲一個二十面骰，加上相關 ability bonus，如果合計值大於 15，即為成功，否則視為失敗。

**優勢骰**

骰 2d20，取比較好的結果

**劣勢骰**

骰 2d20，取比較差的結果

## 物品欄

每位角色可以攜帶的物品數量等同於 CON defense。

大部分的物品（魔法媒介、藥水、一日糧食）都佔用一格物品欄，部分裝備會需要額外的物品欄才能攜帶。

### 法術

角色必須持有法術媒介才能夠施放法術，並且只能施放等級低於或等於角色等級的法術。

- 魔法書籍
  - 可以重複使用
  - 一天同一本魔法書籍只能使用一次
  - 一本魔法書籍只能保存一種魔法
- 魔法捲軸
  - 只能使用一次

## 戰鬥

每個戰鬥回合中，角色可以進行一次移動跟一個行動。

近戰武器可以攻擊鄰近的敵人，當被捲入近身戰鬥時，無法使用遠程武器。

攻擊判定採用以下兩種方式之一：

- 攻擊方擲 d20 + ability bonus，必須高於防禦方的 armor defense
- 防禦方擲 d20 + armor bonus，必須高於攻擊方的 ability defense

### 裝備耗損

武器防具會在戰鬥中逐漸消耗品質 (quality)，當裝備品質降為 0 的時候，裝備損壞無法使用。

- 武器耗損
  - 攻擊方骰出 1
  - 防禦方骰出 20（不含 bonus）
- 防具耗損
  - 攻擊方骰出 20（不含 bonus）
  - 防禦方骰出 1

## 升級

角色經歷一場冒險之後會獲得對應的經驗值(XP)

- 50 XP：低風險的任務
- 100 XP：中等風險的任務
- 200 XP：高風險的任務

每當角色累積了 1000 XP 之後可以升級：

- HP 上限增加 3
- 挑選三種屬性分別提升一點（目標值最高不超過 20）

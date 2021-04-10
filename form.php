<!DOCTYPE html>
<html>
<link rel="stylesheet" href="design.css">
<div class="container">
    <form action="letter.php">
  
      <label for="fname">Client Information</label>
      <input type="text" id="fname" name="fname" placeholder="Firstname">
      <input type="text" id="sname" name="sname" placeholder="Surname">
      <input type="text" id="sal" name="sal" placeholder="Salutation">
      <input type="text" id="add1" name="add1" placeholder="Address 1">
      <input type="text" id="add2" name="add2" placeholder="Address 2">
      <input type="text" id="add3" name="add3" placeholder="Address 3">
      <input type="text" id="city" name="city" placeholder="City">
  
      <label for="atr">Attitude To Risk</label>
      <select id="atr" name="atr">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>

      <label for="revfrq">Review Frequency</label>
      <select id="revfrq" name="revfrq">
        <option value="annual">Annual</option>
        <option value="half yearly">Half-Yearly</option>
      </select>
  
      <label for="valdate">Valuation Date</label>
      <input type="date" id="valdate" name="valdate"
             value="2021-04-10"
             min="1921-04-15" max="2022-04-15">

      <label for="objc">Objectives changed?</label>
      <select id="objc" name="objc">
        <option value="y">Yes</option>
        <option value="n">No</option>
      </select>

      <label for="vul">Vulnerable?</label>
      <select id="vul" name="vul">
        <option value="y">Yes</option>
        <option value="n">No</option>
      </select>

      <label for="efund">Emergency Fund</label>
      <input type="text" id="efund" name="efund" placeholder="£">

      <label for="suff">Sufficient?</label>
      <select id="suff" name="suff">
        <option value="y">Yes</option>
        <option value="n">No</option>
      </select>

      <label for="will">Wills?</label>
      <select id="will" name="will">
        <option value="y">Yes</option>
        <option value="n">No</option>
      </select>

      <label for="dwill">Direction of Will</label>
      <textarea id="dwill" name="dwill" placeholder="Direction of Will" style="height:200px"></textarea>

      <label for="fswitch">Fund switch required?</label>
      <select id="fswitch" name="fswitch">
        <option value="y">Yes</option>
        <option value="n">No</option>
      </select>

      <label for="fundo">Funds out</label>
      <input type="text" id="fundo" name="fundo" placeholder="£">

      <label for="fundi">Funds in</label>
      <input type="text" id="fundi" name="fundi" placeholder="£">

      <label for="creasons">Reasons for change</label>
      <textarea id="creasons" name="creasons" placeholder="Reasons for change" style="height:200px"></textarea>

      <label for="nfreasons">Reasons for new funds selected</label>
      <textarea id="nfreasons" name="nfreasons" placeholder="Reasons for new funds selected" style="height:200px"></textarea>

      <label for="filters">Filters used on Defaqto Engage</label>
      <select id="fliters" name="filters">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
  
      <input type="submit" value="Submit">
  
    </form>
</div>
</html>
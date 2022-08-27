import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";



tor DBank{

  Debug.print("Kiet");

  stable var currentValue: Float = 300;
  //currentValue := 0;
  Debug.print(debug_show(currentValue));

  stable var startTime = Time.now();
  //startTime :=Time.now();
  Debug.print(debug_show(startTime));

  let id =123;
  //Debug.print(debug_show(id));


  public func topUp(amount: Float){
    currentValue += amount;
    Debug.print(debug_show(currentValue));
  };

  public func withdraw(amount: Float){
    let temp:Float = currentValue - amount;
    if(temp >= 0){
    currentValue -= amount;
    Debug.print(debug_show(currentValue));
    }else{
      Debug.print("Can not withdrawl");
    }
  };

  public query func checkBalance(): async Float {
    return currentValue;
  };


  public func compound(){
    let currentTime = Time.now();
    let timeElapsedNS = currentTime - startTime;
    let timeElapsedS = timeElapsedNS/ 1000000000;
    currentValue := currentValue * (1.0001 ** Float.fromInt(timeElapsedS));
    startTime := currentTime;
    Debug.print(debug_show(currentValue));
  }

}

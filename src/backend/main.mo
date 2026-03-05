import List "mo:core/List";
import Runtime "mo:core/Runtime";
import Time "mo:core/Time";

actor {
  type ContactMessage = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  let messages = List.empty<ContactMessage>();

  public shared ({ caller }) func submitMessage(name : Text, email : Text, message : Text) : async () {
    if (name == "" or email == "" or message == "") {
      Runtime.trap("All fields must be filled.");
    };
    let newMessage : ContactMessage = {
      name;
      email;
      message;
      timestamp = Time.now();
    };
    messages.add(newMessage);
  };

  public query ({ caller }) func getAllMessages() : async [ContactMessage] {
    messages.toArray();
  };
};


var detectCycle = function (head) {
    let set = new Set();
    while (head !== null) {
        if (set.has(head)) return head;
        set.add(head);
        head = head.next;
    }
    return null;
};
let res=detectCycle([3,2,0,-4],  1);
console.log(res);
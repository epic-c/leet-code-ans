/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    callBackNode(list1)
    callBackNode(list2)

    console.log(array.sort())

};
var array = []

function callBackNode(list) {
    array.push(list.val)
    if (list.next != null) callBackNode(list.next)
}

// TODO 未完成
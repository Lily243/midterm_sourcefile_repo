'use strict';

console.log('CAMPUS IT SUPPORT REQUEST MANAGER');

// ================================================================
// PART A: STACK
// ================================================================

class Stack {
  constructor() {
    // Create the internal storage for the stack.
    this.items = [];
  }

  push(element) {
    // Add an element to the top of the stack.
    this.items.push(element);
  }

  pop() {
    // Remove and return the top element.
    return this.items.pop();
  }

  peek() {
    // Return the top element without removing it.
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    // Return true when the stack has no elements.
    return this.items.length === 0;
  }

  size() {
    // Return the number of elements in the stack.
    return this.items.length;
  }

  toString() {
    // Return all stack elements as comma-separated text.
    return this.items.join(', ');
  }
}

console.log('\nPART A: UNDO HISTORY');

const actionHistory = new Stack();

// Push the three required actions in the given order.
actionHistory.push('Opened Ticket #101');
actionHistory.push('Assigned Ticket #101');
actionHistory.push('Closed Ticket #101');

// Display the current top action.
console.log('Top Action:', actionHistory.peek());

// Undo the most recent action.
console.log('Undo Action:', actionHistory.pop());

// Display the remaining actions and current size.
console.log('Remaining Actions:', actionHistory.toString());
console.log('Stack Size:', actionHistory.size());

// ================================================================
// PART B: QUEUE
// ================================================================

class Queue {
  constructor() {
    // Create the internal storage for the queue.
    this.items = [];
  }

  enqueue(element) {
    // Add an element at the back of the queue.
    this.items.push(element);
  }

  dequeue() {
    // Remove and return the front element.
    return this.items.shift();
  }

  front() {
    // Return the front element without removing it.
    return this.items[0];
  }

  isEmpty() {
    // Return true when the queue has no elements.
    return this.items.length === 0;
  }

  size() {
    // Return the number of elements in the queue.
    return this.items.length;
  }

  toString() {
    // Return all queue elements as comma-separated text.
    return this.items.join(', ');
  }
}

console.log('\nPART B: WAITING REQUESTS');

const waitingRequests = new Queue();

// Enqueue the four required requests in arrival order.
waitingRequests.enqueue('Ticket #201 - Password Reset');
waitingRequests.enqueue('Ticket #202 - No Internet');
waitingRequests.enqueue('Ticket #203 - Printer Problem');
waitingRequests.enqueue('Ticket #204 - Software Installation');

// Display the front request.
console.log('Next Request:', waitingRequests.front());

// Dequeue and display two processed requests.
console.log('Processed:', waitingRequests.dequeue());
console.log('Processed:', waitingRequests.dequeue());

// Display the remaining queue and current size.
console.log('Remaining Requests:', waitingRequests.toString());
console.log('Queue Size:', waitingRequests.size());

// ================================================================
// PART C: PRIORITY QUEUE
// ================================================================

class PriorityQueue {
  constructor() {
    // Create the internal storage for the priority queue.
    this.items = [];
  }

  enqueue(request, priority) {
    // Create an item containing the request and its priority.
    const item = {
      request: request,
      priority: priority
    };

    // Insert the item at the correct position.
    // Using <= preserves arrival order for equal priorities.
    let position = 0;

    while (
      position < this.items.length &&
      this.items[position].priority <= priority
    ) {
      position++;
    }

    this.items.splice(position, 0, item);
  }

  dequeue() {
    // Remove and return the highest-priority item.
    return this.items.shift();
  }

  size() {
    // Return the number of items in the priority queue.
    return this.items.length;
  }

  print() {
    // Display every request and its priority.
    this.items.forEach((item) => {
      console.log(`${item.request}, Priority ${item.priority}`);
    });
  }
}

console.log('\nPART C: URGENT REQUESTS');

const urgentRequests = new PriorityQueue();

// Enqueue the four required requests.
urgentRequests.enqueue('Ticket #301 - Install Browser', 3);
urgentRequests.enqueue('Ticket #302 - Server Offline', 1);
urgentRequests.enqueue('Ticket #303 - Faculty PC Failure', 2);
urgentRequests.enqueue('Ticket #304 - Internet Laboratory Down', 1);

// Print the initial priority order.
console.log('Initial Priority Order:');
urgentRequests.print();

// Process the first request.
const processedPriorityRequest = urgentRequests.dequeue();

console.log(
  'Processed Priority Request:',
  `${processedPriorityRequest.request}, Priority ${processedPriorityRequest.priority}`
);

// Print the remaining priority requests.
console.log('Remaining Priority Requests:');
urgentRequests.print();

// ================================================================
// PART D: LINKED LIST
// ================================================================

class Node {
  constructor(element) {
    // Store the element in the node.
    this.element = element;

    // Set the next reference to null.
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // Set the number of nodes to zero.
    this.length = 0;

    // Set the head of the list to null.
    this.head = null;
  }

  append(element) {
    // Create a new node to append to the end.
    const node = new Node(element);

    // If the list is empty, the new node becomes the head.
    if (this.head === null) {
      this.head = node;
    } else {
      // Otherwise, traverse to the last node.
      let current = this.head;

      while (current.next !== null) {
        current = current.next;
      }

      current.next = node;
    }

    this.length++;
  }

  insert(position, element) {
    // Reject invalid positions.
    if (position < 0 || position > this.length) {
      return false;
    }

    const node = new Node(element);

    // Insert at the beginning.
    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      // Traverse to the node immediately before the insertion position.
      let previous = this.head;

      for (let i = 1; i < position; i++) {
        previous = previous.next;
      }

      node.next = previous.next;
      previous.next = node;
    }

    this.length++;
    return true;
  }

  removeAt(position) {
    // Reject invalid positions.
    if (
      position < 0 ||
      position >= this.length ||
      this.head === null
    ) {
      return undefined;
    }

    let removedNode;

    // Remove the head node.
    if (position === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      // Traverse to the node immediately before the target.
      let previous = this.head;

      for (let i = 1; i < position; i++) {
        previous = previous.next;
      }

      removedNode = previous.next;
      previous.next = removedNode.next;
    }

    this.length--;

    return removedNode.element;
  }

  indexOf(element) {
    // Traverse the list and return the matching position.
    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (current.element === element) {
        return index;
      }

      current = current.next;
      index++;
    }

    // Return -1 when the element is absent.
    return -1;
  }

  remove(element) {
    // Find the element and remove it using removeAt().
    const index = this.indexOf(element);

    if (index !== -1) {
      return this.removeAt(index);
    }

    return undefined;
  }

  isEmpty() {
    // Return true when no nodes exist.
    return this.length === 0;
  }

  size() {
    // Return the number of nodes.
    return this.length;
  }

  toString() {
    // Traverse the linked list and return all elements as text.
    const elements = [];
    let current = this.head;

    while (current !== null) {
      elements.push(current.element);
      current = current.next;
    }

    return elements.join(', ');
  }
}

console.log('\nPART D: COMPLETED REQUESTS');

const completedRequests = new LinkedList();

// Append the three required requests.
completedRequests.append('Ticket #401 - Account Activated');
completedRequests.append('Ticket #402 - Printer Connected');
completedRequests.append('Ticket #403 - Antivirus Updated');

// Insert Ticket #400 at position 0.
completedRequests.insert(
  0,
  'Ticket #400 - Computer Diagnosed'
);

// Insert Ticket #405 at the end using insert().
completedRequests.insert(
  completedRequests.size(),
  'Ticket #405 - Browser Updated'
);

// Display the complete list.
console.log(
  'Complete List:',
  completedRequests.toString()
);

// Search for Ticket #402.
console.log(
  'Index of Ticket #402:',
  completedRequests.indexOf(
    'Ticket #402 - Printer Connected'
  )
);

// Remove the item at position 1.
console.log(
  'Removed at Position 1:',
  completedRequests.removeAt(1)
);

// Remove Ticket #403 by value.
console.log(
  'Removed by Value:',
  completedRequests.remove(
    'Ticket #403 - Antivirus Updated'
  )
);

// Display the final list and size.
console.log(
  'Final List:',
  completedRequests.toString()
);

console.log(
  'Final Size:',
  completedRequests.size()
);

// ================================================================
// SHORT REFLECTION
// ================================================================

/*
Completing this exercise helped me understand the differences between
stacks, queues, priority queues, and linked lists. The stack uses the
LIFO principle, so the most recently added action is the first one
removed. The queue uses FIFO, so requests are processed in the same
order that they arrive. The priority queue adds another rule by
processing smaller priority numbers first while preserving arrival
order when priorities are equal.

The linked list was more challenging because the elements are stored
in connected nodes instead of an array. I learned how to traverse
nodes and how to insert and remove nodes while updating their links
and the list size. One challenge was making sure that removing or
inserting a node at the beginning, middle, or end did not break the
connections. Testing the program with the required data helped me
understand how each data structure works and how their operations
affect the stored elements.
*/

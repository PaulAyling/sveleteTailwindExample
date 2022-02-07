Q - How to send the event object with an arg to an event handler function
```myfunc(e,myarg)...``
I can run the function just with the event object but when I try to send an additional argument the event object is then not available for my function
```on:consider={() => handleDndConsider('nyVar')}
on:consider={() => handleDndConsider('nyVar',e)}
on:consider={(e) => handleDndConsider('nyVar')}
on:consider={(e) => handleDndConsider('nyVar',e)}```



on:consider={handleDndConsider}

\
			on:consider={(node, (e) => handleDndConsider((e),node))}


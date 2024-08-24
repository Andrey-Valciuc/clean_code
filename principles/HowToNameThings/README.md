# How to Name Things

A good name indicates purpose. Purpose is what something does, or what something is. In the case of a function, its purpose is its behavior.

## Naming anti-patterns:

- [Needlesly short names](#needlessly-short-names)
- [Needlesly exotic names](#needlessly-exotic-names)
- [Needlesly long names](#needlessly-long-names)

### **Needlessly short names:**

Names that are too short are usually employing either program-specific knowledge or domain-specific knowledge that may not generalize well to the audience of the code. A lone programmer may think it reasonable to write the following code:

```
function incId(id, f) {
    for (let x = 0; x < ids.length; ++x) {
        if (ids[x].id === id && f(ids[x])) {
            ids[x].n++;
        }
    }
}
```

Most of these names fail to fulfill the basic characteristics that we desire from a name: to indicate purpose, concept, and contract. We can only guess at these names' purposes and concepts by how they are being used. It would vastly help to refactor this with more meaningful names:

```
function incrementJobInstancesByIdIfFilter(id, filter) {
    for (let i = 0; i < jobs.length; i++) {
        let job = jobs[i];
        if (job.id === id && filter(job)) {
            job.nInstances++;
        }
    }
}
```

We now have a far clearer idea of what's going on. hese new names, we already have a far richer conceptual understanding of this abstraction.

### **Needlessly exotic names:**

Exotic names are those that draw unnecessary attention to themselves and are often obscure or elusive in meaning,
like so:

```
function deStylizeParameters(params) {
    disEntangleParams(params, p => !!p.style).obliterate();
}
```

This is an ostensibly simple piece of behavior obscured by needlessly exotic names. We can, with minimal effort, make a world of difference to the comprehensibility of these abstractions with only a couple of tweaks:

```
function removeStylingFromParams(params) {
    filterParams(params, param => !!param.style).remove();
}
```

Names, on the whole, should be boring. They should not draw attention to themselves.
They should sit there with only their plain meaning on display

### **Needlessly long names:**

he needlessly long name is, therefore, a name with too much meaning. You may wonder how a name could have too much meaning. Meaning is a good thing, but
too much meaning crushed into a single name can only serve to confuse like here:

```
documentManager.refreshAndSaveSignedAndNonPendingDocuments();


```

This long name gives us a clue that the underlying abstraction is needlessly complex. With names this long, a good guideline is to refactor the underlying abstraction so that we only need a name with, at most, one verb, one adjective, and one noun. For example, we could take our long name and split its function into four distinct functions:

```
documentManager.refreshSignedDocuments();
documentManager.refreshNonPendingDocuments();
documentManager.saveSignedDocuments();
documentManager.saveNonPendingDocuments();
```

The point is that long names are a clue to a broken or confused abstraction. Making a name more understandable usually goes hand in hand with making an abstraction more understandable.

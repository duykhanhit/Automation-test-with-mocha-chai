# Demo automation test with mochajs and chaijs

## Install

```bash
npm install
```

## Testing

``bash
npm test

````
## Function
- Verify input (Example)
```python
res.should.be.an('object')
res.body.should.have.property('data').be.an('object')
res.body.data.should.have.property('Fname').be.a('string')
````

- Verify response headers (Example)

```python
expect(res).to.have.header('Content-Type', 'application/json; charset=utf-8')
expect(res).to.have.header('X-Powered-By', 'Express')
```

- Verify response status code (Example)

```python
res.should.have.status(400)
```

## Thanks!

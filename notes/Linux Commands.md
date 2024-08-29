
### Find and delete a file keyword

```bash
find . -name USER_QOS_PROFILES.xml | xargs -I {} rm {}
```